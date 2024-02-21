import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  nickname: string

  @IsNotEmpty()
  @IsString()
  email: string

  @IsNotEmpty()
  @IsString()
  password: string

  @IsString()
  @IsOptional()
  rol: 'sportsman' | 'organizer' = 'sportsman'

  @IsOptional()
  name: string

  @IsOptional()
  apellido: string

  @IsOptional()
  sexo: string

  @IsOptional()
  fechaNacimiento: string

  @IsOptional()
  telefono: string

  @IsOptional()
  direccion: string

  @IsOptional()
  avatar: string

  @IsOptional()
  eventFavorites: string[]
}
