import { ApiProperty } from '@nestjs/swagger'
import {
  IsBoolean,
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString
} from 'class-validator'
import { NumericType } from 'typeorm'

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
    @ApiProperty({description: "Title", required: true})
  title: string

  @IsNotEmpty()
  @IsString()
    @ApiProperty({description: "Description", required: true})
  description: string

  @IsNotEmpty()
  @IsString()
    @ApiProperty({description: "Id sport", required: true})
  sportId: string

  @IsNotEmpty()
  @IsDecimal()
    @ApiProperty({description: "Price", type: "number" , example: 9 ,required: true})
  price: NumericType // Usando IsDecimal para asegurar que el precio puede incluir decimales

  @IsNotEmpty()
  @IsString()
    @ApiProperty({description: "Modality", required: true})
  modality: string

  @IsNotEmpty()
  @IsString()
    @ApiProperty({description: "Location", required: true})
  location: string

  @IsNotEmpty()
  @IsNumber()
    @ApiProperty({description: "Phone Number", required: true})
  phoneNumber: number

  @IsNotEmpty()
  @IsString()
    @ApiProperty({description: "Start date", required: true})
  dateStart: string

  @IsNotEmpty()
  @IsString()
    @ApiProperty({description: "Inscription date", required: true})
  dateInscription: string

  @IsNotEmpty()
  @IsString()
    @ApiProperty({description: "Start time", required: true})
  timeStart: string

  @IsNotEmpty()
  @IsInt()
    @ApiProperty({description: "Quantity places", required: true})
  places: number

  @IsBoolean()
  @IsOptional()
    @ApiProperty({description: "Favorite", required: false})
  favorite: boolean

  @IsString()
  @IsOptional() // Hacemos la propiedad image opcional
  @ApiProperty({ description: "Image in base 64 format", required: false, example: "/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCAFABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKAP/2Q=="})
  image: string
}
