import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNotEmpty, IsString, IsDate, IsOptional } from 'class-validator'
import { UserEntity } from 'src/users/entities/users.entity'
import { ManyToOne } from 'typeorm'

export class CreateCollaboratorDto {
  @IsString()
    @ApiProperty({description: "image" , required: false})
    image: string

  @IsString()
    @ApiProperty({description: "fullName" , required: false})
    fullName: string

    @IsString()
    @ApiProperty({description: "link" , required: false})
    link: string

  @IsString()
    @ApiProperty({description: "creatorId" , required: false})
    creatorId: string


}
