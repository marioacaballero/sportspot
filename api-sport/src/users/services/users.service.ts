import { HttpException, Injectable } from '@nestjs/common'
import { UserEntity } from '../entities/users.entity'
import { EventEntity } from '../../events/entities/event.entity'
import { UserEventHistoryEntity } from '../../events/entities/userEvent.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserDTO } from '../dto/user.dto'
import { UpdateUserDto } from '../dto/update-user.dto'
import { NotificationsService } from 'src/notifications/notifications.service'
import { CreateNotificationDto } from 'src/notifications/dto/create-notification.dto'
import { hash } from 'bcrypt'
import { EventsService } from 'src/events/events.service'
import { SendMailsService } from 'src/send-mails/send-mails.service'

import { JsonwebtokenService } from 'src/jsonwebtoken/jsonwebtoken.service'
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
 
    private readonly notificationsService: NotificationsService,
    
    private readonly eventService: EventsService,
    
    private readonly jsonwebtokenService: JsonwebtokenService,

    private readonly sendMailsService: SendMailsService,

     @InjectRepository(EventEntity)
    private readonly eventsRepository: Repository<EventEntity>, 
    
    @InjectRepository(UserEventHistoryEntity)
    private readonly usersEventRepository: Repository<UserEventHistoryEntity>,
  ) {}

  public async register(userObject: UserDTO) {
    //Hash password
    userObject.password = await hash(
      userObject.password,
      +process.env.HASH_SALT
    )

    const existingUser: UserEntity = await this.userRepository
      .createQueryBuilder('user')
      .where({ email: userObject.email })
      .getOne()

    if (existingUser) {
      throw new HttpException(
        'The email is already registered in the database',
        409
      )
    }

    const newProfile = await this.userRepository.save(userObject)

    if (!newProfile) {
      throw new HttpException('The new profile is not created', 501)
    } else {
      await this.sendMailsService.sendRegistrationNotification(newProfile.email)
    }

    return newProfile
  }

  public async changePasswordService(
    id: string,
    oldPassword: string,
    newPassword: string
  ) {
    const user = await this.getOneService(id)

    if (!user) {
      throw new HttpException(`Usuario con ID ${id} no encontrado`, 404)
    }

    const isPasswordValid = await this.jsonwebtokenService.verifyPassword(
      user,
      oldPassword
    )

    if (!isPasswordValid) {
      throw new HttpException('La contraseña actual no es válida', 401)
    }

    user.password = await hash(newPassword, +process.env.HASH_SALT)

    return await this.userRepository.save(user)
  }

  public async getAllService() {
    return await this.userRepository.find({ where: { isDelete: false } })
  }

  public async getAllEventsUsersService(eventId: string): Promise<UserEntity[]> {
  const event = await this.eventService.getOneService(eventId)
  if (!event) {
    throw new HttpException(`Evento con ID ${eventId} no encontrado`, 404)
  }

  // Cargar la relación de usuarios para el evento
  const users = await this.usersEventRepository
    .createQueryBuilder()
    .relation(UserEntity, 'users')
    .of(event)
    .loadMany()

  return users.filter(user => !user.isDelete)
  }
  
  public async getOneService(id: string) {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where({ id })
      .leftJoinAndSelect('user.events', 'events')
      .getOne()

    if (!user)
      throw new HttpException(`Usuario con ID ${id} no encontrado`, 404)

    return user
  }
  
  public async getOneEvent(id: string) {
    const event = await this.eventsRepository
      .createQueryBuilder('event')
      .where({ id })
      .leftJoinAndSelect('event.creator', 'creator') // Incluimos la relación con el creador del evento
      .leftJoinAndSelect('event.suscribers', 'suscribers') // Incluimos la relación con los suscriptores
      .getOne()

    if (!event)
      throw new HttpException(`Evento con ID ${id} no encontrado`, 404)

    return event
  }
  
  public async getByEmailService(email) {
    return await this.userRepository
      .createQueryBuilder('user')
      .select([
        'user.id',
        'user.nickname',
        'user.name',
        'user.password',
        'user.email'
      ])
      .where({ email })
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

    if (updateUserDto.eventId) {
      const event = await this.eventService.getOneService(updateUserDto.eventId)

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
    }

    if (!user)
      throw new HttpException(`Usuario con ID ${id} no encontrado`, 404)

    for (const key in updateUserDto) {
      if (key === 'password') {
        user[key] = await hash(updateUserDto[key], +process.env.HASH_SALT)
      } else {
        user[key] = updateUserDto[key]
      }
    }

    return await this.userRepository.save(user)
  }

  public async addSubscriptionService(
    userId: string,
    eventId: string
  ): Promise<UserEntity> {
    const user = await this.getOneService(userId)
    if (!user) {
      throw new HttpException(`Usuario con ID ${userId} no encontrado`, 404)
    }

    const event = await this.eventService.getOneService(eventId)
    // Cargar la relación de eventos para poder modificarla
    await this.userRepository
      .createQueryBuilder()
      .relation(UserEntity, 'events')
      .of(user)
      .add(event)

    // await this.notificationsService.createService({
    //   recipientId: userId,
    //   eventId: eventId
    // })
    return await this.getOneService(userId) // Recargar el usuario 
  }

  public async deleteSubscriptionService(
    userId: string,
    eventId: string
  ): Promise<EventEntity> {
    const user = await this.getOneService(userId)
    if (!user) {
      throw new HttpException(`Usuario con ID ${userId} no encontrado`, 404)
    }

    const event = await this.eventService.getOneService(eventId)
    // Cargar la relación de eventos para poder modificarla
    await this.eventsRepository
      .createQueryBuilder()
      .relation(EventEntity, 'suscribers')
      .of(event)
      .remove(user)

    await this.notificationsService.destroyService({
      recipientId: userId,
      eventId: eventId
    })

    return await this.getOneEvent(eventId) // Recargar el usuario para reflejar los cambios
  }

  public async eventFavoritesService(
    userId: string,
    eventId: string
  ): Promise<UserEntity> {
    const user = await this.getOneService(userId)
    if (!user) {
      throw new HttpException(`Usuario con ID ${userId} no encontrado`, 404)
    }

    const event = await this.eventService.getOneService(eventId)
    if (!event) {
      throw new HttpException(`Evento con ID ${eventId} no encontrado`, 404)
    }

    user.eventFavorites = user.eventFavorites ? user.eventFavorites : []
    const index = user.eventFavorites.findIndex((e) => e === eventId)
    if (index === -1) {
      user.eventFavorites = [...user.eventFavorites, eventId] // Guardar el ID del evento
    } else {
      user.eventFavorites = user.eventFavorites.filter((e) => e !== eventId)
    }

    return await this.userRepository.save(user)
  }

  public async findOneByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { email } })
    if (!user) {
      throw new HttpException(`Usuario con ID ${email} no encontrado`, 404)
    }
    return user
  }
}
