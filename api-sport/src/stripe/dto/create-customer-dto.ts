import { ApiProperty } from '@nestjs/swagger'
import {
  IsNotEmpty,
  IsNumber,
  IsString
} from 'class-validator'

export class CreateCustomerDto {
 @IsNotEmpty()
 @ApiProperty({description: 'create stripe customer', required: true })
 email: string
 name: string
}
