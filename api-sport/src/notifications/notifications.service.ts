import { Injectable } from '@nestjs/common'
import { CreateNotificationDto } from './dto/create-notification.dto'
import { UpdateNotificationDto } from './dto/update-notification.dto'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { NotificationEntity } from './entities/notification.entity'

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(NotificationEntity)
    private readonly notificationsRepository: Repository<NotificationEntity>
  ) {}
  public async createService(createNotificationDto: CreateNotificationDto) {
    return await this.notificationsRepository.save(createNotificationDto)
  }

  public async getAllService() {
    return await this.notificationsRepository.find({
      where: { isDelete: false }
    })
  }

  public async getOneService(id: string) {
    return await this.notificationsRepository
      .createQueryBuilder('event')
      .where({ id })
      .getOne()
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
      throw new Error(`Deporte con ID ${id} no encontrado`)
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
}
