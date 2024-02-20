import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'

@Injectable()
export class SendMailsService {
  constructor(private readonly mailerService: MailerService) {}

  async sendRegistrationNotification(email: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Registro exitoso',
      template: 'registration', // Archivo de plantilla de correo electrónico
      context: {} // Datos adicionales que pueden ser pasados a la plantilla
    })
  }
}
