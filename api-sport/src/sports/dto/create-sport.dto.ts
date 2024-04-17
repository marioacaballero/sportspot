import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsOptional } from 'class-validator'

export class CreateSportDto {
  @IsNotEmpty()
  @IsString()
    @ApiProperty({description: "Sport name", required: true})
  name: string

  @IsNotEmpty()
  @IsString()
    @ApiProperty({description: "Sport type", required: true})
  type: string

  @IsOptional()
  @IsString()
    @ApiProperty({description: "Sport description", required: false})
  description: string
}
