import { Entity, Column, NumericType } from 'typeorm'
import { BaseEntity } from 'src/config/base.entity'

@Entity({ name: 'event' })
export class EventEntity extends BaseEntity {
  @Column()
  title: string

  @Column()
  description: string

  @Column()
  sport: string

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
}
