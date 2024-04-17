import { PartialType } from '@nestjs/mapped-types'
import { CreateSportDto } from './create-sport.dto'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateSportDto extends PartialType(CreateSportDto) {
  @ApiProperty({description:"Sport name", required: true}) 
  name: string
  @ApiProperty({description:"Sport type", required: true})
  type: string
  @ApiProperty({description:"Sport description", required: false})
  description: string
}
