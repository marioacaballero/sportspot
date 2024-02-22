import {
  IsBoolean,
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
  @IsString()
  dateStart: string

  @IsNotEmpty()
  @IsString()
  dateInscription: string

  @IsNotEmpty()
  @IsString()
  timeStart: string

  @IsBoolean()
  @IsOptional()
  favorite: boolean

  @IsString()
  @IsOptional() // Hacemos la propiedad image opcional
  image: string
}
