import { MailerModule } from '@nestjs-modules/mailer'
import { Module } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'
import { EventEntity } from 'src/events/entities/event.entity'
import { UserEventHistoryEntity } from 'src/events/entities/userEvent.entity'
import { EventsService } from 'src/events/events.service'
import { JsonwebtokenService } from 'src/jsonwebtoken/jsonwebtoken.service'
import { NotificationEntity } from 'src/notifications/entities/notification.entity'
import { NotificationsService } from 'src/notifications/notifications.service'
import { UsersController } from 'src/users/controllers/users.controller'
import { UserEntity } from 'src/users/entities/users.entity'
import { UsersService } from 'src/users/services/users.service'
import { ResetCodeEntity } from './entities/reset-code.entity'
import { ResetCodeController } from './reset-code.controller'
import { ResetCodeService } from './reset-code.service'
import { SendMailsController } from './send-mails.controller'
import { SendMailsService } from './send-mails.service'

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp-mail.outlook.com',
        port: 587,
        auth: {
          user: 'spotsports.test@hotmail.com',
          pass: 'aythen1234'
        }
      },
      defaults: {
        from: 'spotsports.test@hotmail.com' // Dirección de correo electrónico del remitente
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
      EventEntity,
      UserEventHistoryEntity
    ])
  ],
  controllers: [SendMailsController, UsersController, ResetCodeController],
  providers: [
    SendMailsService,
    ResetCodeService,
    UsersService,
    NotificationsService,
    EventsService,
    JsonwebtokenService,
    JwtService
  ],
  exports: [SendMailsService]
})
export class SendMailsModule {}
