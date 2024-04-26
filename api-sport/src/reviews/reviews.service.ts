import { HttpException, Injectable } from '@nestjs/common'
import { UserEntity } from '../users/entities/users.entity'
import { EventEntity } from '../events/entities/event.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { ReviewEntity } from './entities/reviews.entity'
import { CreateReviewDto } from './dto/create-review-dto'
@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,

     @InjectRepository(EventEntity)
    private readonly eventsRepository: Repository<EventEntity>, 
    
    @InjectRepository(ReviewEntity)
    private readonly reviewsRepository: Repository<ReviewEntity>
  ) {}

 
  public async createReview (review: CreateReviewDto, userId: string, eventId: string ):  Promise<ReviewEntity>  {

    const user = await this.usersRepository.findOne({ where: { id: userId } })
    const event = await this.eventsRepository.findOne({
      where: { id: eventId }
    })

    if (!user || !event) {
      throw new HttpException(`Usuario o evento no encontrado`, 404)
    }

    return await this.reviewsRepository.save(review)
  }


}
