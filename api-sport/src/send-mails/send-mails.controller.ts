import { Body, Controller, Post } from '@nestjs/common'
import { SendMailsService } from './send-mails.service'
import { ApiTags } from '@nestjs/swagger'

@Controller('send-mails')
  @ApiTags("SendMails")
export class SendMailsController {
  constructor(private readonly sendMailsService: SendMailsService) {}

  @Post('registration-mail')
  async sendRegistrationMail(@Body() body: { email: string }) {
    console.log(body.email, 'q llega de email???')
    return this.sendMailsService.sendRegistrationNotification(body.email)
  }
  @Post('register')
  async sendMailRegister(@Body() body: { email: string }) {
    console.log('entra acá?????')
    return this.sendMailsService.sendMail(body.email)
  }
}
