import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNotEmpty, IsString, IsDate, IsOptional } from 'class-validator'
import { UserEntity } from 'src/users/entities/users.entity'
import { ManyToOne } from 'typeorm'

export class CreateNotificationDto {
  @IsNotEmpty()
  @IsString()
    @ApiProperty({description: "Title" , required: true})
  title: string

  @IsNotEmpty()
  @IsString()
    @ApiProperty({description: "Message" , required: true})
  message: string

  @IsNotEmpty()
  @IsDate()
    @ApiProperty({description: "Date" , required: true})
  date: Date

  @IsNotEmpty()
  @IsString()
    @ApiProperty({description: "Type event" , required: true})
  eventType: string

  @IsNotEmpty()
  @IsString()
    @ApiProperty({description: "Id event" , required: true})
  eventId: string

  @IsOptional() // Hacer el campo recipientId opcional
  @IsNotEmpty()
  @IsString()
    @ApiProperty({description: "Id recipient" , required: false})
  recipientId: string

  @IsNotEmpty()
  @IsBoolean()
    @ApiProperty({description: "Read" , required: true})
  read: boolean = false

  @ManyToOne(() => UserEntity, (user) => user.notifications)
    @ApiProperty({description: "Recipient" , required: false})
  recipient: UserEntity
}
