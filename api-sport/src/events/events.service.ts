import { Injectable } from '@nestjs/common'
import { CreateEventDto } from './dto/create-event.dto'
import { UpdateEventDto } from './dto/update-event.dto'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { EventEntity } from './entities/event.entity'

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventsRepository: Repository<EventEntity>
  ) {}

  public async createService(createEventDto: CreateEventDto) {
    return await this.eventsRepository.save(createEventDto)
  }

  public async getAllService(query: { [key: string]: any }) {
    const where = { isDelete: false }
    Object.keys(query).forEach((key) => {
      where[key] = query[key]
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

    event.title = updateEventDto.title
    event.sportId = updateEventDto.sportId
    event.description = updateEventDto.description
    event.price = updateEventDto.price
    event.modality = updateEventDto.modality
    event.location = updateEventDto.location
    event.dateStart = updateEventDto.dateStart
    event.dateInscription = updateEventDto.dateInscription
    event.image = updateEventDto.image

    return await this.eventsRepository.save(event)
  }

  public async deleteService(id) {
    await this.eventsRepository.update(id, { isDelete: true })
    return await this.getOneService(id)
  }
}
