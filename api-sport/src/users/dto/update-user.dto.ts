import { PartialType } from '@nestjs/mapped-types'
import { UserDTO } from './user.dto'
import { IsOptional, IsString } from 'class-validator'

export class UpdateUserDto extends PartialType(UserDTO) {
  @IsString()
  @IsOptional()
  eventId?: string
}
