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
import { JsonwebtokenService } from 'src/jsonwebtoken/jsonwebtoken.service'
//import { JsonwebtokenModule } from 'src/jsonwebtoken/jsonwebtoken.module'
import { JwtService } from '@nestjs/jwt'
import { UserEventHistoryEntity } from 'src/events/entities/userEvent.entity'
import { PushNotificationService } from 'src/notification-push/notification.service'
import { Inscription } from 'src/inscriptions/entities/inscription.entity'
import { InscriptionsService } from 'src/inscriptions/inscriptions.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, EventEntity, UserEventHistoryEntity,NotificationEntity,Inscription])
  ],
  controllers: [UsersController],
  exports: [] /* [que quiero exportar] */,
  providers: [
    InscriptionsService,
    UsersService,
    NotificationsService,
    EventsService,
    SendMailsService,
    JsonwebtokenService,
    PushNotificationService,
    JwtService,
  ]
})
export class UsersModule {}
