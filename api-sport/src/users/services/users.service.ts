import { Injectable } from '@nestjs/common'
import { UserEntity } from '../entities/users.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserDTO } from '../dto/user.dto'
import { EventEntity } from 'src/events/entities/event.entity'
import { UpdateUserDto } from '../dto/update-user.dto'
import { NotificationsService } from 'src/notifications/notifications.service'
import { CreateNotificationDto } from 'src/notifications/dto/create-notification.dto'
import { hash } from 'bcrypt'
import { EventsService } from 'src/events/events.service'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,

    @InjectRepository(EventEntity)
    private readonly eventRepository: Repository<EventEntity>,

    private readonly notificationsService: NotificationsService,

    private readonly eventService: EventsService
  ) {}

  public async register(userObject: UserDTO) {
    try {
      //Hash password
      userObject.password = await hash(
        userObject.password,
        +process.env.HASH_SALT
      )

      const profile: UserEntity = await this.userRepository
        .createQueryBuilder('profile')
        .where({ email: userObject.email })
        .getOne()

      if (profile) {
        throw new Error('The email is already registered in the database')
      }
      const newProfile = await this.userRepository.save(userObject)

      if (!newProfile) {
        throw new Error('The new profile is not created')
      }
      return newProfile
    } catch (error) {
      throw Error(error.message)
    }
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

  public async getByEmailService(email) {
    return await this.userRepository
      .createQueryBuilder('user')
      .where({ email })
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

    const event = await this.eventService.getOneService(updateUserDto.eventId)

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

    const event = await this.eventService.getOneService(eventId)
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
