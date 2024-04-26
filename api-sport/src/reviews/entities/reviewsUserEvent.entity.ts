import {
    Entity,
    Column,
  
    ManyToOne,
   
  } from 'typeorm'
  import { BaseEntity } from 'src/config/base.entity'
  
  import { UserEntity } from 'src/users/entities/users.entity'
  import { EventEntity } from '../../events/entities/event.entity'
  
  
  
  @Entity({ name: 'user_event_review' })
  export class UserEventReviewEntity extends BaseEntity {
    @Column()
    date: string
  
    @ManyToOne(() => UserEntity, (user) => user.reviews)
    user: UserEntity
  
    @ManyToOne(() => EventEntity, (event) => event.reviews)
    event: EventEntity
   
  }
  