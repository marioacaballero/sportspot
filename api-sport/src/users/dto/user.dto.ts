import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  email: string

  @IsNotEmpty()
  @IsString()
  password: string

  @IsString()
  @IsOptional()
  rol: 'sportsman' | 'organizer' = 'sportsman'
}
