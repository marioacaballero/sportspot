import { Module } from '@nestjs/common';
import { InscriptionsService } from './inscriptions.service';
import { InscriptionsController } from './inscriptions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from 'src/events/entities/event.entity';
import { UserEntity } from 'src/users/entities/users.entity';
import { NotificationEntity } from 'src/notifications/entities/notification.entity';
import { UserEventHistoryEntity } from 'src/events/entities/userEvent.entity';
import { DocumentEntity } from 'src/documents/entities/document.entity';
import { Inscription } from './entities/inscription.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EventEntity, UserEntity,NotificationEntity,UserEventHistoryEntity,DocumentEntity,Inscription])
  ],
  controllers: [InscriptionsController],
  providers: [InscriptionsService],
})
export class InscriptionsModule {}
