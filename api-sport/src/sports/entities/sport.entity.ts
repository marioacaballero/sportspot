import { BaseEntity } from 'src/config/base.entity'
import { EventEntity } from 'src/events/entities/event.entity'
import { Entity, Column, OneToMany } from 'typeorm'

@Entity({ name: 'sport' })
export class SportEntity extends BaseEntity {
  @Column()
  name: string

  @Column()
  type: string

  @Column({ nullable: true })
  description: string | null

  @OneToMany(() => EventEntity, (event) => event.sport)
  events: EventEntity[]
}
