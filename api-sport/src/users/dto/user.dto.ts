import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

 enum UserRol {
  Sportsman = 'sportsman',
  Organizer = 'organizer',
}
export class UserDTO {
  // @IsNotEmpty()
  // @IsString()
  //   @ApiProperty({ description: 'User nickname', required:true})
  // nickname: string

  @IsNotEmpty()
  @IsString()
    @ApiProperty({ description: 'User email', required:true})    
  email: string

  @IsNotEmpty()
  @IsString()
    @ApiProperty({description: 'User password', required:true})    
  password: string

  @IsString()
  @IsOptional()
    @ApiProperty({description: 'User rol', enum:UserRol, required:false})    
  rol: 'sportsman' | 'organizer' = 'sportsman'

  @IsOptional()
    @ApiProperty({description: 'User name', required:false})
  name: string

  @IsOptional()
    @ApiProperty({description: 'User lastname', required:false})
  apellido: string

  @IsOptional()
  @ApiProperty({description: 'user preferences', required: false })
  preferences: object

  @IsOptional()
  @ApiProperty({description: 'User sex', required: false })
  sexo: string

  @IsOptional()
    @ApiProperty({description: 'User date of birth ', required:false})
  fechaNacimiento: string

  @IsOptional()
    @ApiProperty({description: 'User phone number ', required:false})
  telefono: string

  @IsOptional()
  @ApiProperty({description: 'User address ', required: false })
  direccion: string

  @IsOptional()
    @ApiProperty({description: 'User avater',required:false})
  avatar: string

  @IsOptional()
  @ApiProperty({ required: false })
  eventFavorites: string[]
}
