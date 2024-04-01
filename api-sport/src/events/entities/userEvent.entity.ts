import {
  Entity,
  Column,

  ManyToOne,
 
} from 'typeorm'
import { BaseEntity } from 'src/config/base.entity'

import { UserEntity } from 'src/users/entities/users.entity'
import { EventEntity } from './event.entity'



@Entity({ name: 'user_event_history' })
export class UserEventHistoryEntity extends BaseEntity {
  @Column()
  visitDate: string

  @ManyToOne(() => UserEntity, (user) => user.eventHistory)
  user: UserEntity

  @ManyToOne(() => EventEntity, (event) => event.userHistory)
  event: EventEntity
 
}
