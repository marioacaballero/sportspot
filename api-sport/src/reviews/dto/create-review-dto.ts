import { ApiProperty } from '@nestjs/swagger'
import {
  IsNotEmpty,
  IsNumber,
  IsString
} from 'class-validator'

export class CreateReviewDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({description: "Title", required: true})
  title: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({description: "Description", required: true})
  description: string

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({description: "Qualitfication", required: true})
  qualification: 1 | 2 | 3 | 4 | 5
}
