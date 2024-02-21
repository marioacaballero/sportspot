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

@Module({
  imports: [
    TypeOrmModule.forFeature([EventEntity, UserEntity, NotificationEntity])
  ],
  controllers: [EventsController],
  providers: [
    EventsService,
    UsersService,
    NotificationsService,
    SendMailsService,
    JsonwebtokenService,
    JwtService
  ]
})
export class EventsModule {}
