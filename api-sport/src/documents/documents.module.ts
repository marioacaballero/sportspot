import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { EventEntity } from 'src/events/entities/event.entity';
import { DocumentEntity } from './entities/document.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsService } from 'src/events/events.service';
import { UserEntity } from 'src/users/entities/users.entity';
import { UserEventHistoryEntity } from 'src/events/entities/userEvent.entity';
import { NotificationEntity } from 'src/notifications/entities/notification.entity';
import { UsersService } from 'src/users/services/users.service';
import { NotificationsService } from 'src/notifications/notifications.service';
import { SendMailsService } from 'src/send-mails/send-mails.service';
import { JsonwebtokenService } from 'src/jsonwebtoken/jsonwebtoken.service';
import { PushNotificationService } from 'src/notification-push/notification.service';
import { JwtService } from '@nestjs/jwt';
import * as multer from 'multer';
import { MulterModule } from '@nestjs/platform-express';
import path, { extname } from 'path';
import { FileInterceptor } from '@nestjs/platform-express'; 

console.log(__dirname + '/uploads')

@Module({
  imports: [
    TypeOrmModule.forFeature([DocumentEntity, UserEntity, EventEntity, UserEventHistoryEntity, NotificationEntity]), // Registra tanto la entidad como el repositorio
   // Configura Multer para subir archivos al server
  ],
  controllers: [DocumentsController],
  providers: [DocumentsService,  UsersService,
    NotificationsService,
    EventsService,
    SendMailsService,
    JsonwebtokenService,
    PushNotificationService,
    JwtService,],
})



export class DocumentsModule {

}
