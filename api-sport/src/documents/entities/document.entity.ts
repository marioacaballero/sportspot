import { EventEntity } from "src/events/entities/event.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'document' })
export class DocumentEntity {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column({ type: 'bytea' }) // Tipo de datos bytea para almacenar el archivo binario
    data: Buffer; // Buffer para almacenar el archivo binario en PostgreSQL

    @Column({ nullable: true }) // Columna para la URL de la imagen (opcional)
    imageUrl: string;

    @ManyToOne(() => EventEntity, event => event.documents)
    event: EventEntity;

}
