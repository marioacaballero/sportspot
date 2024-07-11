import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Inscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  apellido: string;

  @Column({ type: 'text', nullable: true })
  nacimiento: string;

  @Column({ type: 'text', nullable: true })
  sexo: string;

  @Column({ type: 'text', nullable: true })
  dni: string;

  @Column({ type: 'text', nullable: true })
  equipo: string;

  @Column({ type: 'text', nullable: true })
  localidad: string;

  @Column({ type: 'text', nullable: true })
  provincia: string;

  @Column({ type: 'text', nullable: true })
  categoria: string;

  @Column({ type: 'text', nullable: true })
  email: string;

  @Column({ type: 'text', nullable: true })
  reemail: string;

  @Column({ type: 'text', nullable: true })
  tlf: string;

  @Column({ type: 'text', nullable: true })
  eventId : string;

  @Column({ type: 'text', nullable: true })
  userId : string;

  @Column({ type: 'boolean', nullable: true })
  federado: boolean;

  @Column({ type: 'boolean', nullable: true })
  ley: boolean;


}
