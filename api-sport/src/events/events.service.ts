import { HttpException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { SendMailsService } from 'src/send-mails/send-mails.service'
import { UserEntity } from 'src/users/entities/users.entity'
import { Between, In, Repository } from 'typeorm'
import { CreateEventDto } from './dto/create-event.dto'
import { UpdateEventDto } from './dto/update-event.dto'
import { EventEntity } from './entities/event.entity'
import { UserEventHistoryEntity } from './entities/userEvent.entity'
import { NotificationEntity } from 'src/notifications/entities/notification.entity'

export class EventsService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventsRepository: Repository<EventEntity>,
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
    @InjectRepository(UserEventHistoryEntity)
    private readonly usersEventRepository: Repository<UserEventHistoryEntity>,
    private readonly sendMailsService: SendMailsService,
    @InjectRepository(NotificationEntity)
    private readonly notificationsRepository: Repository<NotificationEntity>
  ) {}

  public async createService(createEventDto: CreateEventDto) {
    const event = await this.eventsRepository.save(createEventDto)

    return event
  }

  public async getAllService(query: { [key: string]: any }) {
    const where = { isDelete: false }
    let sportName = null

    Object.keys(query).forEach((key) => {
      if (query[key] !== '' && query[key] !== undefined) {
        if (key === 'sportId') {
          where[key] = In(query[key])
        } else if (key === 'dateStart') {
          if (Array.isArray(query[key])) {
            where[key] = Between(query[key][0], query[key][1])
          } else {
            where[key] = query[key]
          }
        } else if (key === 'dateInscription') {
          if (Array.isArray(query[key])) {
            where[key] = Between(query[key][0], query[key][1])
          } else {
            where[key] = query[key]
          }
        } else if (key === 'sportName') {
          sportName = query[key]
        } else {
          where[key] = query[key]
        }
      }
    })
    let queryBuilder = this.eventsRepository
      .createQueryBuilder('event')
      .leftJoinAndSelect('event.creator', 'creator') // Incluimos la relación con el creador del evento
      .leftJoinAndSelect('event.suscribers', 'suscribers') // Incluimos la relación con los suscriptores
      .leftJoinAndSelect('event.reviews', 'reviews')
      .where(where)

    if (sportName) {
      queryBuilder = queryBuilder
        .leftJoin('event.sport', 'sport', 'sport.name = :sportName', {
          sportName
        })
        .andWhere('sport.name = :sportName', { sportName })
    } else {
      queryBuilder = queryBuilder.leftJoin('event.sport', 'sport')
    }

    return await queryBuilder.getMany()
  }

  public async getOneService(id: string) {
    const event = await this.eventsRepository
      .createQueryBuilder('event')
      .where({ id })
      .leftJoinAndSelect('event.sport', 'sport')
      .leftJoinAndSelect('event.creator', 'creator')
      .leftJoinAndSelect('event.suscribers', 'suscribers')
      .leftJoinAndSelect('event.reviews', 'reviews')
      .leftJoinAndSelect('reviews.reviewCreator', 'reviewCreator')
      .getOne()

    if (!event) {
      throw new HttpException(`Evento con ID igual a ${id} no encontrado`, 404)
    }

    return event
  }

  public async updateService(
    id: string,
    updateEventDto: UpdateEventDto
  ): Promise<EventEntity> {
    const event = await this.eventsRepository
      .createQueryBuilder('event')
      .where({ id })
      .leftJoinAndSelect('event.suscribers', 'suscribers')
      .getOne()

    if (!event) {
      throw new HttpException(`Evento con ID perro ${id} no encontrado`, 404)
    }

    for (const key in updateEventDto) {
      if (updateEventDto.hasOwnProperty(key)) {
        event[key] = updateEventDto[key]
      }
    }
    if (
      updateEventDto.dateStart ||
      updateEventDto.dateInscription ||
      updateEventDto.timeStart ||
      updateEventDto.location ||
      updateEventDto.modality
    ) {
      await this.sendMailsService.sendEventModificationNotification(
        event,
        updateEventDto
      )
    }

    return await this.eventsRepository.save(event)
  }

  public async deleteService(id) {
    const event = await this.eventsRepository
      .createQueryBuilder('event')
      .where({ id })
      .leftJoinAndSelect('event.suscribers', 'suscribers')
      .getOne()

    if (!event) {
      throw new HttpException(`Evento con ID ${id} no encontrado`, 404)
    }

    await this.eventsRepository.update(id, { isDelete: true })
    await this.sendMailsService.sendEventDeletedNotification(event)
    return await this.getOneService(id)
  }

  public async getFavorites(id: string) {
    const user = await this.usersRepository
      .createQueryBuilder('user')
      .where({ id })
      .getOne()

    return await this.eventsRepository.find({
      where: { id: In(user.eventFavorites) }
    })
  }

  public async visitEvent(eventId: string, userId: string) {
    const user = await this.usersRepository.findOne({ where: { id: userId } })
    const event = await this.eventsRepository.findOne({
      where: { id: eventId }
    })

    if (!user || !event) {
      throw new HttpException(`Usuario o evento no encontrado`, 404)
    }

    const eventUserHistory = await this.getUserEventHistory(userId, eventId)

    if (!eventUserHistory) {
      const history = new UserEventHistoryEntity()
      history.user = user
      history.event = event
      history.visitDate = new Date().toISOString() // Puedes cambiar esto por la fecha que quieras
      await this.usersEventRepository.save(history)
      return history
    } else {
      eventUserHistory.visitDate = new Date().toISOString()
      await this.usersEventRepository.save(eventUserHistory)
      return eventUserHistory
    }
  }

  public async getLastVisitedEvents(
    userId: string,
    filter: 'day' | 'week' | 'month'
  ) {
    const date = new Date()
    switch (filter) {
      case 'day':
        date.setDate(date.getDate() - 1)
        break
      case 'week':
        date.setDate(date.getDate() - 7)
        break
      case 'month':
        date.setMonth(date.getMonth() - 1)
        break
      default:
        throw new Error('Invalid filter')
    }

    const lastVisitedEvents = await this.usersEventRepository
      .createQueryBuilder('userEventHistory')
      .innerJoinAndSelect('userEventHistory.event', 'event')
      .where('userEventHistory.user = :userId', { userId: userId })
      .andWhere('userEventHistory.visitDate > :date', {
        date: date.toISOString()
      })
      .orderBy('userEventHistory.visitDate', 'DESC')
      .limit(5)
      .getMany()

    return lastVisitedEvents
  }

  public async getUserEventHistory(userId: string, eventId: string) {
    const userEventHistory = await this.usersEventRepository
      .createQueryBuilder('userEventHistory')
      .where('userEventHistory.user = :userId', { userId: userId })
      .andWhere('userEventHistory.event = :eventId', { eventId: eventId })
      .getOne()

    return userEventHistory
  }

  public async getSubscribedEvents(userId: string): Promise<EventEntity[]> {
    const user = await this.usersRepository.findOne({
      where: { id: userId },
      relations: ['events']
    });

    if (!user) {
      throw new HttpException(`Usuario con ID ${userId} no encontrado`, 404);
    }

    return user.events;
  }

  public async getEventSubscribers(eventId: string): Promise<UserEntity[]> {
    const event = await this.eventsRepository.findOne({
      where: { id: eventId },
      relations: ['suscribers']
    });

    if (!event) {
      throw new HttpException(`Evento con ID ${eventId} no encontrado`, 404);
    }

    return event.suscribers;
  }



  public async finalizeEvent(eventId: string): Promise<void> {
    const event = await this.eventsRepository.findOne({
      where: { id: eventId },
      relations: ['suscribers']
    });

    if (!event) {
      throw new HttpException(`Evento con ID ${eventId} no encontrado`, 404);
    }

    // Marcar el evento como finalizado (esto puede variar según tu modelo de datos)
    event.isFinalized = true;
    await this.eventsRepository.save(event);

    // Crear una notificación para cada suscriptor
    const notifications: NotificationEntity[] = event.suscribers.map((user) => {
      const notification = new NotificationEntity();
      notification.title = `Evento finalizado: ${event.title}`;
      notification.message = `El evento "${event.title}" ha finalizado. Gracias por participar.`;
      notification.date = new Date();
      notification.eventType = 'event_finalized';
      notification.eventId = event.id;
      notification.recipient = user;
      notification.read = false;
      return notification;
    });

    await this.notificationsRepository.save(notifications);
  }
}

