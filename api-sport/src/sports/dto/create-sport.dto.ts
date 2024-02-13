import { IsNotEmpty, IsString, IsOptional } from 'class-validator'

export class CreateSportDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  type: string

  @IsOptional()
  @IsString()
  description: string
}
