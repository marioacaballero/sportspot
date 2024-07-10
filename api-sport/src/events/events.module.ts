import { Module } from '@nestjs/common'
import { EventsService } from './events.service'
import { EventsController } from './events.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EventEntity } from './entities/event.entity'
import { UsersService } from 'src/users/services/users.service'
import { UserEntity } from 'src/users/entities/users.entity'
import { NotificationEntity } from 'src/notifications/entities/notification.entity'
import { NotificationsService } from 'src/notifications/notifications.service'
import { JwtService } from '@nestjs/jwt'
import { JsonwebtokenService } from 'src/jsonwebtoken/jsonwebtoken.service'
import { SendMailsService } from 'src/send-mails/send-mails.service'
import { UserEventHistoryEntity } from './entities/userEvent.entity'
import { PushNotificationService } from 'src/notification-push/notification.service'
import { DocumentEntity } from 'src/documents/entities/document.entity'
import { DocumentsService } from 'src/documents/documents.service'


@Module({
  imports: [
    TypeOrmModule.forFeature([EventEntity, UserEntity,NotificationEntity,UserEventHistoryEntity,DocumentEntity])
  ],
  controllers: [EventsController],
  providers: [
    DocumentsService,
    EventsService,
    UsersService,
    NotificationsService,
    SendMailsService,
    PushNotificationService,
    JsonwebtokenService,
    JwtService
  ]
})
export class EventsModule {}
