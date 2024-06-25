// src/push-notification/push-notification.module.ts

import { Module } from '@nestjs/common';
import { PushNotificationService } from './notification.service';
import { PushNotificationController } from './notification.controller';

@Module({
  providers: [PushNotificationService],
  controllers: [PushNotificationController],
  exports:[PushNotificationService]
})
export class PushNotificationModule {}
