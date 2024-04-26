import {
    Entity,
    Column,
    ManyToOne
  } from 'typeorm'
  import { BaseEntity } from 'src/config/base.entity'
  import { EventEntity } from 'src/events/entities/event.entity'
  import { UserEntity } from 'src/users/entities/users.entity'
//   import { NotificationEntity } from 'src/notifications/entities/notification.entity'
//   import { UserEventHistoryEntity } from './userEvent.entity'
  
  
  @Entity({ name: 'review' })
  export class ReviewEntity extends BaseEntity {
    @Column()
    title: string
  
    @Column()
    description: string
  
    @Column({
        type: 'enum',
        enum: [1, 2, 3, 4, 5],
        default: 3
      })
    qualification: 1 | 2 | 3 | 4 | 5
  
    // Relación de muchos a uno con el usuario creador
    @ManyToOne(() => UserEntity, (user) => user.reviews)
    reviewCreator: UserEntity
    
    @ManyToOne(() => EventEntity, (event) => event.reviews)
    eventReview: EventEntity
   
  }
  