import { Module } from '@nestjs/common'
import { SendMailsService } from './send-mails.service'
import { SendMailsController } from './send-mails.controller'
import { MailerModule } from '@nestjs-modules/mailer'
import { join } from 'path'

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.example.com', // Servidor SMTP
        port: 587,
        secure: false, // true para TLS; false para otros protocolos
        auth: {
          user: 'tu-correo@example.com', // Correo electrónico de origen
          pass: 'tu-contraseña' // Contraseña del correo electrónico de origen
        }
      },
      defaults: {
        from: '"Nombre del Remitente" <tu-correo@example.com>' // Dirección de correo electrónico del remitente
      },
      template: {
        dir: join(__dirname, 'views'), // Directorio de plantillas de correo electrónico

        options: {
          strict: true
        }
      }
    })
  ],
  controllers: [SendMailsController],
  providers: [SendMailsService]
})
export class SendMailsModule {}
