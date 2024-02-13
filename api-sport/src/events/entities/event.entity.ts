import { Entity } from 'typeorm'
import { BaseEntity } from 'src/config/base.entity'

@Entity({ name: 'event' })
export class Event extends BaseEntity {}
