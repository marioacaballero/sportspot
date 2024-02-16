import { Type } from 'class-transformer'
import {
  IsBoolean,
  IsDate,
  IsDecimal,
  IsNotEmpty,
  IsOptional,
  IsString
} from 'class-validator'
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
  sportId: string

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

  @IsBoolean()
  @IsOptional()
  favorite: boolean
}
