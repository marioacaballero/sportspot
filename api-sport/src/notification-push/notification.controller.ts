// src/push-notification/push-notification.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { PushNotificationService } from './notification.service';

@Controller('push-notification')
export class PushNotificationController {
  constructor(private readonly pushNotificationService: PushNotificationService) {}

  @Post('send')
  async sendPushNotifications(  @Body('pushTokens') pushTokens: string[],
  @Body('message') message: string): Promise<void> {
    await this.pushNotificationService.sendPushNotifications(pushTokens,message,"SportSpot");
  }
}
