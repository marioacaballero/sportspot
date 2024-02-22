import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'
import { join } from 'path'

@Injectable()
export class SendMailsService {
  constructor(private readonly mailerService: MailerService) {}

  async sendRegistrationNotification(email: string) {
    const htmlTemplate = `
      <style>
        p {
          color: blue;
        }
      </style>
      <p>¡Gracias por registrarte!</p>
      <p>Este es un correo de prueba.</p>
    `
    await this.mailerService.sendMail({
      to: email,
      subject: 'Registro exitoso',
      html: htmlTemplate, // Archivo de plantilla de correo electrónico
      context: {} // Datos adicionales que pueden ser pasados a la plantilla
    })
    console.log(join(__dirname, '..', 'template', 'registration'))
    return 'Correo enviado exitosamente'
  }
}
