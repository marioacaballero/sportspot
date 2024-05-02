import { ApiProperty } from '@nestjs/swagger'
import {
  IsNotEmpty,
  IsString
} from 'class-validator'

export class CreateCustomerDto {
 @IsNotEmpty()
 @ApiProperty({ description: 'create stripe customer', required: true })
    @IsString()
 email: string
 
    @IsString()
 name: string
}
