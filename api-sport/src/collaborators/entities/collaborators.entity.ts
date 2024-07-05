import { Entity, Column, ManyToOne } from 'typeorm'
import { BaseEntity } from 'src/config/base.entity'
import { UserEntity } from 'src/users/entities/users.entity'
import { EventEntity } from 'src/events/entities/event.entity'

@Entity({ name: 'collaborators' })
export class CollaboratorsEntity extends BaseEntity {
  @Column()
  image: string

  @Column()
  fullName: string

  @Column()
  link: string

  @Column()
  creatorId: string

}
