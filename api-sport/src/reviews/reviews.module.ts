import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EventsService } from '../events/events.service'
import { EventEntity } from '../events/entities/event.entity'
import { UsersService } from 'src/users/services/users.service'
import { UserEntity } from 'src/users/entities/users.entity'
import { UserEventReviewEntity } from './entities/reviewsUserEvent.entity'
import { ReviewEntity } from './entities/reviews.entity'
import { ReviewController } from './reviews.controller'
import { UserEventHistoryEntity } from 'src/events/entities/userEvent.entity'
import { SendMailsService } from 'src/send-mails/send-mails.service'
import { NotificationsService } from 'src/notifications/notifications.service'
import { JsonwebtokenService } from 'src/jsonwebtoken/jsonwebtoken.service'
import { NotificationEntity } from "src/notifications/entities/notification.entity"
import { JwtService } from '@nestjs/jwt'
import { ReviewsService } from './reviews.service'
import { PushNotificationService } from 'src/notification-push/notification.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([EventEntity, UserEntity, ReviewEntity, UserEventReviewEntity, UserEventHistoryEntity, NotificationEntity])
  ],
  controllers: [ReviewController],
  providers: [
    EventsService,
    UsersService,
    SendMailsService,
    NotificationsService,
    JsonwebtokenService,
    JwtService,
    ReviewsService,
    PushNotificationService
  ]
})
export class ReviewModule {}