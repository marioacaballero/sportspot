import { Entity, Column, ManyToOne } from 'typeorm'
import { BaseEntity } from 'src/config/base.entity'
import { UserEntity } from 'src/users/entities/users.entity'

@Entity({ name: 'notification' })
export class NotificationEntity extends BaseEntity {
  @Column()
  title: string

  @Column()
  message: string

  @Column({ type: 'timestamp' })
  date: Date

  @Column()
  eventType: string

  @Column()
  eventId: string

  @Column()
  recipientId: string

  @Column({ default: false })
  read: boolean

  @ManyToOne(() => UserEntity, (user) => user.notifications)
  recipient: UserEntity
}
