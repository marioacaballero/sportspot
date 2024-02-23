import { Module } from '@nestjs/common'
import { SendMailsService } from './send-mails.service'
import { SendMailsController } from './send-mails.controller'
import { MailerModule } from '@nestjs-modules/mailer'
import { join } from 'path'
import { ResetCodeController } from './reset-code.controller'
import { ResetCodeService } from './reset-code.service'
import { ResetCodeEntity } from './entities/reset-code.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersService } from 'src/users/services/users.service'
import { NotificationsService } from 'src/notifications/notifications.service'
import { EventsService } from 'src/events/events.service'
import { JsonwebtokenService } from 'src/jsonwebtoken/jsonwebtoken.service'
import { JwtService } from '@nestjs/jwt'
import { UserEntity } from 'src/users/entities/users.entity'
import { NotificationEntity } from 'src/notifications/entities/notification.entity'
import { EventEntity } from 'src/events/entities/event.entity'

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.ethereal.email', // Servidor SMTP
        port: 587,
        secure: false, // true para TLS; false para otros protocolos
        auth: {
          user: 'judson.cremin36@ethereal.email', // Correo electrónico de origen
          pass: 'suj5m3zpGjxFnfvHEB' // Contraseña del correo electrónico de origen
        }
      },
      defaults: {
        from: '"Nombre del Remitente" <tu-correo@example.com>' // Dirección de correo electrónico del remitente
      },
      template: {
        dir: join(__dirname, '..', 'template'), // Directorio de plantillas de correo electrónico

        options: {
          strict: true
        }
      }
    }),
    TypeOrmModule.forFeature([
      ResetCodeEntity,
      UserEntity,
      NotificationEntity,
      EventEntity
    ])
  ],
  controllers: [SendMailsController, ResetCodeController],
  providers: [
    SendMailsService,
    ResetCodeService,
    UsersService,
    NotificationsService,
    EventsService,
    SendMailsService,
    JsonwebtokenService,
    JwtService
  ]
})
export class SendMailsModule {}
