import { BaseEntity } from 'src/config/base.entity'
import { NotificationEntity } from 'src/notifications/entities/notification.entity'
import { SportEntity } from 'src/sports/entities/sport.entity'
import { UserEntity } from 'src/users/entities/users.entity'
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  NumericType,
  OneToMany
} from 'typeorm'
import { UserEventHistoryEntity } from './userEvent.entity'
import { ReviewEntity } from 'src/reviews/entities/reviews.entity'

@Entity({ name: 'event' })
export class EventEntity extends BaseEntity {
  @Column()
  title: string

  @Column()
  description: string

  @Column()
  sportId: string

  @Column('decimal')
  price: NumericType

  @Column()
  modality: string

  @Column()
  location: string

  @Column({
    type: 'integer',
    nullable: true
  })
  phoneNumber: number

  @Column()
  dateStart: string

  @Column()
  dateInscription: string

  @Column()
  timeStart: string

  @Column({
    type: 'integer',
    nullable: true
  })
  places: number

  @Column({ nullable: true })
  eventLink: string

  @Column({
    type: 'text',
    default:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAABCAYAAABNAIQzAAAAIElEQVR42u3BMQEAAAgDIM3vuW7mMYYP0JlsAQAAAK8OmrgCiekCissAAAAASUVORK5CYII=',
    nullable: true
  })
  image: string

  @Column({ nullable: true, default: null })
  isFinalized: boolean | null

  @ManyToOne(() => SportEntity, (sport) => sport.events)
  sport: SportEntity

  // Relación de muchos a uno con el usuario creador
  @ManyToOne(() => UserEntity, (user) => user.eventsCreated)
  creator: UserEntity

  // Relación de muchos a muchos con los usuarios suscritos
  @ManyToMany(() => UserEntity, (user) => user.events)
  @JoinTable()
  suscribers: UserEntity[]

  @OneToMany(() => NotificationEntity, (notification) => notification.event)
  notifications: NotificationEntity[]

  @OneToMany(() => UserEventHistoryEntity, (history) => history.event)
  userHistory: UserEventHistoryEntity[]

  @OneToMany(() => ReviewEntity, (review) => review.eventReview)
  reviews: ReviewEntity
}
