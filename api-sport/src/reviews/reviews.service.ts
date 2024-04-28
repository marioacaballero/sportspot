import { HttpException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntity } from '../users/entities/users.entity'
import { EventEntity } from '../events/entities/event.entity'
import { ReviewEntity } from './entities/reviews.entity'
import { CreateReviewDto } from './dto/create-review-dto'

export class ReviewsService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,

    @InjectRepository(EventEntity)
    private readonly eventsRepository: Repository<EventEntity>,

    @InjectRepository(ReviewEntity)
    private readonly reviewsRepository: Repository<ReviewEntity>
  ) {}

  public async createReview(
    review: CreateReviewDto,
    userId: string,
    eventId: string
  ): Promise<ReviewEntity> {
    const user = await this.usersRepository.findOne({ where: { id: userId } })
    const event = await this.eventsRepository.findOne({
      where: { id: eventId },
      relations: ['suscribers']
    })

    if (!user || !event) {
      throw new HttpException(`Usuario o evento no encontrado`, 404)
    }
    const hasUserParticipated = event.suscribers.some(
      (participant) => participant.id === user.id
    )

    if (!hasUserParticipated) {
      throw new HttpException(`El usuario no ha participado en el evento`, 400)
    }

    const reviewEntity = new ReviewEntity()
    reviewEntity.title = review.title
    reviewEntity.description = review.description
    reviewEntity.qualification = review.qualification
    reviewEntity.reviewCreator = user
    reviewEntity.eventReview = event

    const reviewReturn = await this.reviewsRepository.save(reviewEntity)
    console.log(reviewReturn)
    return reviewReturn
  }

  public async getReviewsByEvent(eventId: string): Promise<ReviewEntity> {
    const event = await this.eventsRepository.findOne({
      where: { id: eventId },
      relations: ['reviews']
    })

    if (!event) {
      throw new HttpException(`Evento no encontrado`, 404)
    }

    return event.reviews
  }
}
