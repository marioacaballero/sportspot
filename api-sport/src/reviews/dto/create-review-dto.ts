import { ApiProperty } from '@nestjs/swagger'
import {
  IsNotEmpty,
  IsString
} from 'class-validator'
import { NumericType } from 'typeorm'

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
  @IsString()
    @ApiProperty({description: "Qualitfication", required: true})
    qualification: NumericType

}
