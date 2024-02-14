// usuario.entity.ts
import { BaseEntity } from 'src/config/base.entity'
import { NotificationEntity } from 'src/notifications/entities/notification.entity'
import { Entity, Column, OneToMany } from 'typeorm'

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @OneToMany(() => NotificationEntity, (notification) => notification.recipient)
  notifications: NotificationEntity[]
}
