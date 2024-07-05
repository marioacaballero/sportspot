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
import { NotificationsService } from 'src/notifications/notifications.service'
import { PushNotificationService } from 'src/notification-push/notification.service'
import schedule from 'node-schedule'
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
    private readonly notificationsRepository: Repository<NotificationEntity>,
    private readonly notificationsService: NotificationsService,
    private readonly notificationsPushService: PushNotificationService,
    private readonly mailService: SendMailsService,


  ) { }

  public async createService(createEventDto: CreateEventDto) {


    const date = new Date(createEventDto.dateInscription);

    const dateAfterOneDay = new Date(date);
    dateAfterOneDay.setDate(date.getDate() + 1);

    const event = await this.eventsRepository.save(createEventDto)

    await this.notifyUsersByLocation(event);

    schedule.scheduleJob(dateAfterOneDay, async function () {
     await this.notifyEventSubscribersMail(event.id)
      await this.notifySubscribers(event, "Los resultados de tu último evento ya están disponibles.", "RESULTADOS DISPONIBLES.")
    });

    schedule.scheduleJob(date, async function () {
      await this.notifySubscribers(event, "Tu inscripción te ha generado puntos. Disfruta de tu próximo evento.", "¡ENHORABUENA!")
    });

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
    try {
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
      const eventToNotificate = await this.eventsRepository.findOne({ where: { id }, relations: ['subscribersNotifications'] });
      if (eventToNotificate) {
        await this.notifySubscribers(eventToNotificate, "Se ha actualizado un evento al que te suscribiste","EVENTO ACTUALIZADO.");
      }

      return await this.eventsRepository.save(event)
    } catch (error) {
      console.log(error, "error")
    }
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


  async createServiceAprox(createEventDto: CreateEventDto): Promise<EventEntity> {
    const event = this.eventsRepository.create(createEventDto);
    const savedEvent = await this.eventsRepository.save(event);

    // Enviar notificaciones a los usuarios con la misma ubicación
    await this.notifyUsersByLocation(savedEvent);

    return savedEvent;
  }

  private async notifyUsersByLocation(event: EventEntity) {
    console.log(event, "creatoooor")
    const creatorId = `${event.creator}`
    const users = await this.usersRepository.find();
    const usersToNotify = users.filter(user => {
      if (!user.preferences || !user.preferences['location']) return false;
      return user.preferences['location'] === event.location;
    });

    for (const user of usersToNotify) {
      // Verificar si el usuario no es el creador del evento antes de enviar la notificación
      if (event.creator && user.id !== creatorId) {
        await this.notificationsService.createService({
          title: 'Nuevo evento en tu zona',
          message: `Se ha creado un nuevo evento en tu ubicación preferida: ${event.title}`,
          date: new Date(),
          eventType: 'event',
          eventId: event.id,
          recipient: user,
          recipientId: user.id,
          read: false,
        });

        if (user?.NotificationPush) {
          this.notificationsPushService.sendPushNotifications([user?.NotificationPush], "Un nuevo evento de tus deportes de práctica está disponible. Entra y conócelo.", "¡NUEVO EVENTO EN TU ZONA!")
        }
      }
    }

    // Verificar si event.creator está definido antes de enviar la notificación al usuario creador del evento
    if (creatorId) {
      console.log(event, "eventtt")
      await this.notificationsService.createService({
        title: 'Evento creado',
        message: `Tu evento "${event.title}" ha sido creado con éxito.`,
        date: new Date(),
        eventType: 'event_created',
        eventId: event.id,
        recipientId: creatorId,
        recipient: event.creator,
        read: false,
      });
    }
  }

  async subscribeToEvent(userId: string, eventId: string): Promise<void> {
    const user = await this.usersRepository.findOne({ where: { id: userId }, relations: ['subscribedEventsNotifications'] });
    const event = await this.eventsRepository.findOne({ where: { id: eventId } });

    if (user && event) {
      if (!user.subscribedEventsNotifications.some(e => e.id === eventId)) {
        user.subscribedEventsNotifications.push(event);
        await this.usersRepository.save(user);
      } else {
        user.subscribedEventsNotifications = user.subscribedEventsNotifications.filter(e => e.id !== eventId);
        await this.usersRepository.save(user);
      }
    }
    this.notificationsPushService.sendPushNotifications([user.NotificationPush],"El precio de inscripción a este evento cambiará en las próximas horas. Apúntate antes de que suba de precio.","¡CUIDADO!")
  }

  async notifySubscribers(event: any, message: string, title: string): Promise<void> {
    const subscribers = event.subscribersNotifications;
    const pushTokens = subscribers.map(user => user.NotificationPush) || []; // Asumimos que los usuarios tienen un campo `pushToken`
    await this.notificationsPushService.sendPushNotifications(pushTokens, message, title);
  }
  async getSubscribedEventsNotification(userId: string): Promise<EventEntity[]> {
    const user = await this.usersRepository.findOne({ where: { id: userId }, relations: ['subscribedEventsNotifications'] });
    return user?.subscribedEventsNotifications || [];
  }

  async notifyEventSubscribers(eventId: string, message: string, title: string): Promise<void> {
    const event = await this.eventsRepository.findOne({ where: { id: eventId }, relations: ['subscribersNotifications'] });
    if (event) {
      await this.notifySubscribers(event, message, title);
    }
  }

  async notifyEventSubscribersMail(eventId: string): Promise<void> {
    const event = await this.eventsRepository.findOne({ where: { id: eventId }, relations: ['subscribersNotifications'] });
    if (event) {
      for(let user in event.suscribers){
        await this.mailService.sendReviewMail(event.suscribers[user].email);
      }
    }
  }

}

