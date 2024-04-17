import { PartialType } from '@nestjs/mapped-types'
import { UserDTO } from './user.dto'
import { IsOptional, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateUserDto extends PartialType(UserDTO) {
  @IsString()
  @IsOptional()
  @ApiProperty({ description: "Id of event", required: false })
  eventId?: string
}
