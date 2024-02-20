import { Module } from '@nestjs/common'
import { UsersService } from './services/users.service'
import { UsersController } from './controllers/users.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './entities/users.entity'
import { EventEntity } from 'src/events/entities/event.entity'
import { NotificationEntity } from 'src/notifications/entities/notification.entity'
import { NotificationsService } from 'src/notifications/notifications.service'
import { EventsService } from 'src/events/events.service'
import { SendMailsService } from 'src/send-mails/send-mails.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, EventEntity, NotificationEntity])
  ],
  exports: [UsersService] /* [que quiero exportar] */,
  providers: [
    UsersService,
    NotificationsService,
    EventsService,
    SendMailsService
  ],
  controllers: [UsersController]
})
export class UsersModule {}
