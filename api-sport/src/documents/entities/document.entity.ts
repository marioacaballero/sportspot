import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'document' })
export class DocumentEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  merchantCustomerId: string

  @Column()
  merchantCustomerIban: string

  @Column()
  name: string

  @Column()
  documentType: number
}
