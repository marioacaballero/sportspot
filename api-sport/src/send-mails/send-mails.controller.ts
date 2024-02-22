import { Body, Controller, Post } from '@nestjs/common'
import { SendMailsService } from './send-mails.service'

@Controller('send-mails')
export class SendMailsController {
  constructor(private readonly sendMailsService: SendMailsService) {}

  @Post('registration-mail')
  async sendRegistrationMail(@Body() body: { email: string }) {
    return this.sendMailsService.sendRegistrationNotification(body.email)
  }
}
