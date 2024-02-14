import { Type } from 'class-transformer'
import { IsDate, IsDecimal, IsNotEmpty, IsString } from 'class-validator'
import { NumericType } from 'typeorm'

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  title: string

  @IsNotEmpty()
  @IsString()
  description: string

  @IsNotEmpty()
  @IsString()
  sport: string

  @IsNotEmpty()
  @IsDecimal()
  price: NumericType // Usando IsDecimal para asegurar que el precio puede incluir decimales

  @IsNotEmpty()
  @IsString()
  modality: string

  @IsNotEmpty()
  @IsString()
  location: string

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  dateStart: Date

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  dateInscription: Date
}
