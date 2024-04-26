import { Module } from '@nestjs/common'
import { EventsService } from '../events/events.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EventEntity } from '../events/entities/event.entity'
import { UsersService } from 'src/users/services/users.service'
import { UserEntity } from 'src/users/entities/users.entity'
import { UserEventReviewEntity } from './entities/reviewsUserEvent.entity'
import { ReviewEntity } from './entities/reviews.entity'
import { ReviewController } from './reviews.controller'


@Module({
  imports: [
    TypeOrmModule.forFeature([EventEntity, UserEntity, ReviewEntity, UserEventReviewEntity])
  ],
  controllers: [ReviewController],
  providers: [
    EventsService,
    UsersService,

  ]
})
export class EventsModule {}