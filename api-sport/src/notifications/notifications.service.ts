import { Injectable, HttpException } from '@nestjs/common'
import { CreateNotificationDto } from './dto/create-notification.dto'
import { UpdateNotificationDto } from './dto/update-notification.dto'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { NotificationEntity } from './entities/notification.entity'
import { UserEntity } from 'src/users/entities/users.entity'

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(NotificationEntity)
    private readonly notificationsRepository: Repository<NotificationEntity>,
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>
  ) {}

  public async createService(createNotificationDto: CreateNotificationDto) {
    const user = await this.usersRepository
      .createQueryBuilder('user')
      .where({ id: createNotificationDto.recipientId })
      .getOne()

    if (!user) {
      throw new HttpException(
        `Usuario con ID ${createNotificationDto.recipientId} no encontrado`,
        404
      )
    }

    const notification = this.notificationsRepository.create(
      createNotificationDto
    )
    notification.recipient = user

    return await this.notificationsRepository.save(notification)
  }

  public async getAllService(query: { [key: string]: any }) {
    const where = { isDelete: false }
    Object.keys(query).forEach((key) => {
      where[key] = query[key]
    })
    return await this.notificationsRepository.find({ where })
  }

  public async getOneService(id: string) {
    const notifications = await this.notificationsRepository
      .createQueryBuilder('event')
      .where({ id })
      .getOne()

    if (!notifications) {
      throw new HttpException(`Notificación con ID ${id} no encontrada`, 404)
    }

    return notifications
  }

  public async updateService(
    id: string,
    updateNotificationDto: UpdateNotificationDto
  ): Promise<NotificationEntity> {
    const notifications = await this.notificationsRepository
      .createQueryBuilder('sport')
      .where({ id })
      .getOne()

    if (!notifications) {
      throw new HttpException(`Notificación con ID ${id} no encontrada`, 404)
    }

    notifications.title = updateNotificationDto.title
    notifications.message = updateNotificationDto.message
    notifications.date = updateNotificationDto.date
    notifications.eventType = updateNotificationDto.eventType
    notifications.eventId = updateNotificationDto.eventId
    notifications.recipientId = updateNotificationDto.recipientId
    notifications.read = updateNotificationDto.read

    return await this.notificationsRepository.save(notifications)
  }

  public async deleteService(id) {
    await this.notificationsRepository.update(id, { isDelete: true })
    return await this.getOneService(id)
  }

  public async destroyService({ recipientId, eventId }) {
    return await this.notificationsRepository.delete({ recipientId, eventId })
  }
}
