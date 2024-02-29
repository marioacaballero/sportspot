import { Injectable, HttpException } from '@nestjs/common'
import { CreateEventDto } from './dto/create-event.dto'
import { UpdateEventDto } from './dto/update-event.dto'
import { Between, In, Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { EventEntity } from './entities/event.entity'
import { UserEntity } from 'src/users/entities/users.entity'
import { SendMailsService } from 'src/send-mails/send-mails.service'

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventsRepository: Repository<EventEntity>,

    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,

    private readonly sendMailsService: SendMailsService
  ) {}

  public async createService(createEventDto: CreateEventDto) {
    return await this.eventsRepository.save(createEventDto)
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
      .select(['event', 'sport.name AS sportName'])

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

    return await queryBuilder.getRawMany()
  }

  public async getOneService(id: string) {
    const event = await this.eventsRepository
      .createQueryBuilder('event')
      .where({ id })
      .leftJoinAndSelect('event.sport', 'sport')
      .leftJoinAndSelect('event.creator', 'creator')
      .leftJoinAndSelect('event.suscribers', 'suscribers')
      .getOne()

    if (!event) {
      throw new HttpException(`Evento con ID iguana ${id} no encontrado`, 404)
    }

    return event
  }

  public async updateService(
    id: string,
    updateEventDto: UpdateEventDto
  ): Promise<EventEntity> {
    console.log('infoooooooo', updateEventDto)

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
      throw new HttpException(`Evento con ID gato ${id} no encontrado`, 404)
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
}
