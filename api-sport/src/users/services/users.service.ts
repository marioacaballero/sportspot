import { Injectable } from '@nestjs/common'
import { UserEntity } from '../entities/users.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserDTO } from '../dto/user.dto'
import { EventEntity } from 'src/events/entities/event.entity'
import { UpdateUserDto } from '../dto/update-user.dto'
import { NotificationsService } from 'src/notifications/notifications.service'
import { CreateNotificationDto } from 'src/notifications/dto/create-notification.dto'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,

    @InjectRepository(EventEntity)
    private readonly eventRepository: Repository<EventEntity>,

    private readonly notificationsService: NotificationsService
  ) {}

  public async createService(body: UserDTO) {
    return await this.userRepository.save(body)
  }

  public async getAllService() {
    return await this.userRepository.find({ where: { isDelete: false } })
  }
  public async getOneService(id) {
    return await this.userRepository
      .createQueryBuilder('user')
      .where({ id })
      .leftJoinAndSelect('user.events', 'events')
      .getOne()
  }

  public async deleteService(id) {
    await this.userRepository.update(id, { isDelete: true })
    return await this.getOneService(id)
  }

  public async updateService(
    id: string,
    updateUserDto: UpdateUserDto
  ): Promise<UserEntity> {
    const user = await this.getOneService(id)

    const event = await this.eventRepository
      .createQueryBuilder('event')
      .where({ id: updateUserDto.eventId })
      .getOne()

    if (!user) {
      throw new Error(`Usuario con ID ${id} no encontrado`)
    }

    user.name = updateUserDto.name
    user.email = updateUserDto.email

    if (event && !user.events.some((e) => e.id === event.id)) {
      user.events = [...user.events, event]
      const newNotification: CreateNotificationDto = {
        recipientId: id,
        eventId: updateUserDto.eventId,
        title: event.title,
        message: `el evento se realizara el dia ${event.dateStart}`,
        date: new Date(),
        eventType: 'Your event type',
        read: false,
        recipient: user
      }

      await this.notificationsService.createService(newNotification)
    }

    return await this.userRepository.save(user)
  }

  public async deleteSubscriptionService(
    userId: string,
    eventId: string
  ): Promise<UserEntity> {
    const user = await this.getOneService(userId)
    if (!user) {
      throw new Error(`Usuario con ID ${userId} no encontrado`)
    }
    console.log(eventId)
    const event = await this.eventRepository
      .createQueryBuilder('event')
      .where({ id: eventId })
      .getOne()

    // Cargar la relación de eventos para poder modificarla
    await this.userRepository
      .createQueryBuilder()
      .relation(UserEntity, 'events')
      .of(user)
      .remove(event)

    await this.notificationsService.destroyService({
      recipientId: userId,
      eventId: eventId
    })

    return await this.getOneService(userId) // Recargar el usuario para reflejar los cambios
  }
}
