import { IsBoolean, IsNotEmpty, IsString, IsDate } from 'class-validator'
import { UserEntity } from 'src/users/entities/users.entity'
import { ManyToOne } from 'typeorm'

export class CreateNotificationDto {
  @IsNotEmpty()
  @IsString()
  title: string

  @IsNotEmpty()
  @IsString()
  message: string

  @IsNotEmpty()
  @IsDate()
  date: Date

  @IsNotEmpty()
  @IsString()
  eventType: string

  @IsNotEmpty()
  @IsString()
  eventId: string

  @IsNotEmpty()
  @IsString()
  recipientId: string

  @IsNotEmpty()
  @IsBoolean()
  read: boolean = false

  @ManyToOne(() => UserEntity, (user) => user.notifications)
  recipient: UserEntity
}
