import { Module } from '@nestjs/common'
import { JsonwebtokenService } from './jsonwebtoken.service'
import { JsonwebtokenController } from './jsonwebtoken.controller'
import { JwtModule } from '@nestjs/jwt'
import { UsersService } from 'src/users/services/users.service'
import { UserEntity } from 'src/users/entities/users.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { NotificationEntity } from 'src/notifications/entities/notification.entity'
import { EventEntity } from 'src/events/entities/event.entity'
import { NotificationsService } from 'src/notifications/notifications.service'
import { EventsService } from 'src/events/events.service'
import { SendMailsService } from 'src/send-mails/send-mails.service'
import { UserEventHistoryEntity } from 'src/events/entities/userEvent.entity'
import { PushNotificationService } from 'src/notification-push/notification.service'
import { InscriptionsService } from 'src/inscriptions/inscriptions.service'
import { Inscription } from 'src/inscriptions/entities/inscription.entity'


@Module({
  imports: [
    JwtModule.register({
      secret: 'secreto_supersecreto',
      signOptions: { expiresIn: '1h' } // Opciones de firma, puedes ajustar el tiempo de expiración
    }),
    TypeOrmModule.forFeature([UserEntity, Inscription,EventEntity,NotificationEntity,UserEventHistoryEntity])
  ],
  controllers: [JsonwebtokenController],
  exports: [JsonwebtokenService],
  providers: [
    InscriptionsService,
    JsonwebtokenService,
    UsersService,
    NotificationsService,
    PushNotificationService,
    EventsService,
    SendMailsService
  ]
})
export class JsonwebtokenModule {}
