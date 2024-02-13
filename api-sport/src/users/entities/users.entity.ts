// usuario.entity.ts
import { BaseEntity } from 'src/config/base.entity'
import { Entity, Column } from 'typeorm'

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string
}
