import { Injectable } from '@nestjs/common'
import { CreateEventDto } from './dto/create-event.dto'
import { UpdateEventDto } from './dto/update-event.dto'
import { Between, In, Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { EventEntity } from './entities/event.entity'
import { UserEntity } from 'src/users/entities/users.entity'

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventsRepository: Repository<EventEntity>,

    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>
  ) {}

  public async createService(createEventDto: CreateEventDto) {
    return await this.eventsRepository.save(createEventDto)
  }

  public async getAllService(query: { [key: string]: any }) {
    const where = { isDelete: false }

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
        }
        where[key] = query[key]
      }
    })

    return await this.eventsRepository.find({ where })
  }

  public async getOneService(id: string) {
    return await this.eventsRepository
      .createQueryBuilder('event')
      .where({ id })
      .leftJoinAndSelect('event.sport', 'sport')
      .leftJoinAndSelect('event.creator', 'creator')
      .leftJoinAndSelect('event.suscribers', 'suscribers')
      .getOne()
  }

  public async updateService(
    id: string,
    updateEventDto: UpdateEventDto
  ): Promise<EventEntity> {
    const event = await this.eventsRepository
      .createQueryBuilder('sport')
      .where({ id })
      .getOne()

    if (!event) {
      throw new Error(`Deporte con ID ${id} no encontrado`)
    }

    for (const key in updateEventDto) {
      if (updateEventDto.hasOwnProperty(key)) {
        event[key] = updateEventDto[key]
      }
    }

    return await this.eventsRepository.save(event)
  }

  public async deleteService(id) {
    await this.eventsRepository.update(id, { isDelete: true })
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
