// usuario.entity.ts
import { BaseEntity } from 'src/config/base.entity'
import { EventEntity } from 'src/events/entities/event.entity'
import { UserEventHistoryEntity } from 'src/events/entities/userEvent.entity'
import { NotificationEntity } from 'src/notifications/entities/notification.entity'
import { ReviewEntity } from 'src/reviews/entities/reviews.entity'
import { Entity, Column, OneToMany, ManyToMany } from 'typeorm'

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @Column({ unique: true,nullable: true })
  nickname: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @Column({
    type: 'enum',
    enum: ['sportsman', 'organizer'],
    default: 'sportsman'
  })
  rol: 'sportsman' | 'organizer' = 'sportsman'

  @Column({ nullable: true })
  name: string

  @Column({ nullable: true })
  lastName: string

  @Column({ nullable: true })
  stripeId: string

  @Column({ nullable: true })
  genres: string

  @Column({ nullable: true })
  birthDate: string

  @Column({ nullable: true })
  phoneNumber: string

  @Column({ nullable: true })
  address: string

  @Column({ nullable: true, type: 'json' })
  preferences: object

  @Column({ type: 'text', nullable: true })
  avatar: string

  @Column('simple-array', { nullable: true })
  eventFavorites: string[]

  @Column({ default: false })
  isAprobed: boolean

  @OneToMany(() => NotificationEntity, (notification) => notification.recipient)
  notifications: NotificationEntity[]

  // Relación de uno a muchos con los eventos creados
  @OneToMany(() => EventEntity, (event) => event.creator)
  eventsCreated: EventEntity[]

  // Relación de muchos a muchos con los eventos suscritos
  @ManyToMany(() => EventEntity, (event) => event.suscribers)
  events: EventEntity[]

  @OneToMany(() => UserEventHistoryEntity, (history) => history.user)
  eventHistory: UserEventHistoryEntity[]

  @OneToMany(() => ReviewEntity, (review) => review.reviewCreator)
  reviews: ReviewEntity
 
}
