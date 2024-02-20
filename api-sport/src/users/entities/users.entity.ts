// usuario.entity.ts
import { BaseEntity } from 'src/config/base.entity'
import { EventEntity } from 'src/events/entities/event.entity'
import { NotificationEntity } from 'src/notifications/entities/notification.entity'
import { Entity, Column, OneToMany, ManyToMany } from 'typeorm'

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @Column({ unique: true })
  name: string

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

  @Column('simple-array', { nullable: true })
  eventFavorites: string[]

  @OneToMany(() => NotificationEntity, (notification) => notification.recipient)
  notifications: NotificationEntity[]

  // Relación de uno a muchos con los eventos creados
  @OneToMany(() => EventEntity, (event) => event.creator)
  eventsCreated: EventEntity[]

  // Relación de muchos a muchos con los eventos suscritos
  @ManyToMany(() => EventEntity, (event) => event.suscribers)
  events: EventEntity[]
}
