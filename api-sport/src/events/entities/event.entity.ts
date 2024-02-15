import {
  Entity,
  Column,
  NumericType,
  ManyToOne,
  ManyToMany,
  JoinTable
} from 'typeorm'
import { BaseEntity } from 'src/config/base.entity'
import { SportEntity } from 'src/sports/entities/sport.entity'
import { UserEntity } from 'src/users/entities/users.entity'

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

  @Column()
  dateStart: Date

  @Column()
  dateInscription: Date

  @ManyToOne(() => SportEntity, (sport) => sport.events)
  sport: SportEntity

  // Relación de muchos a uno con el usuario creador
  @ManyToOne(() => UserEntity, (user) => user.eventsCreated)
  creator: UserEntity

  // Relación de muchos a muchos con los usuarios suscritos
  @ManyToMany(() => UserEntity)
  @JoinTable()
  suscribers: UserEntity[]
}
