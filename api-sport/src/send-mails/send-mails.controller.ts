import { Body, Controller, Post } from '@nestjs/common'
import { SendMailsService } from './send-mails.service'
import { ApiTags } from '@nestjs/swagger'

@Controller('send-mails')
  @ApiTags("SendMails")
export class SendMailsController {
  constructor(private readonly sendMailsService: SendMailsService) {}

  @Post('registration-mail')
  async sendRegistrationMail(@Body() body: { email: string }) {
    return this.sendMailsService.sendRegistrationNotification(body.email)
  }
  @Post('register')
  async sendMailRegister(@Body() body: { email: string }) {
    return this.sendMailsService.sendMail(body.email)
  }
}
