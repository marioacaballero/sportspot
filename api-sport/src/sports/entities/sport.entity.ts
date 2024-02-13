import { BaseEntity } from 'src/config/base.entity'
import { Entity, Column } from 'typeorm'

@Entity({ name: 'sport' })
export class SportEntity extends BaseEntity {
  @Column()
  name: string

  @Column()
  type: string

  @Column({ nullable: true })
  description: string | null
}
