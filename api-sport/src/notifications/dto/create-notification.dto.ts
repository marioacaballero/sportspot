import { IsBoolean, IsNotEmpty, IsString, IsDate } from 'class-validator'

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
}
