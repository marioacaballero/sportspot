import { Body, Controller, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { SendMailsService } from './send-mails.service'

@Controller('send-mails')
@ApiTags('SendMails')
export class SendMailsController {
  constructor(private readonly sendMailsService: SendMailsService) {}

  @Post('registration-mail')
  public async sendRegistrationMail(@Body() body: { email: string }) {
    return this.sendMailsService.sendRegistrationNotification(body.email)
  }

  @Post('suscribe')
  async registerEvent(@Body() body: { email: string; name_event: string }) {
    await this.sendMailsService.sendRegistrationNotificationSus(
      body.email,
      body.name_event
    )
    return { message: 'Registro exitoso' }
  }
}
