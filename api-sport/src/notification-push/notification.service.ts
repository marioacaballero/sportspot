// src/push-notification/push-notification.service.ts

import { Injectable, Logger } from '@nestjs/common';
import { Expo, ExpoPushMessage, ExpoPushTicket, ExpoPushReceipt } from 'expo-server-sdk';

@Injectable()
export class PushNotificationService {
  private readonly expo: Expo;
  private readonly logger = new Logger(PushNotificationService.name);

  constructor() {
    this.expo = new Expo({
      accessToken: process.env.EXPO_ACCESS_TOKEN,
      useFcmV1: false,
    });
  }

  async sendPushNotifications(pushTokens: string[],message:string): Promise<void> {
    const messages: ExpoPushMessage[] = [];

    for (let pushToken of pushTokens) {
      if (!Expo.isExpoPushToken(pushToken)) {
        this.logger.error(`Push token ${pushToken} is not a valid Expo push token`);
        continue;
      }

      messages.push({
        to: pushToken,
        sound: 'default',
        body: message,
        data: { withSome: 'data' },
      });
    }

    const chunks = this.expo.chunkPushNotifications(messages);
    const tickets: ExpoPushTicket[] = [];

    for (let chunk of chunks) {
      try {
        let ticketChunk = await this.expo.sendPushNotificationsAsync(chunk);
        this.logger.log(ticketChunk);
        tickets.push(...ticketChunk);
      } catch (error) {
        this.logger.error(error);
      }
    }

    this.handleReceipts(tickets);
  }

  private async handleReceipts(tickets: ExpoPushTicket[]): Promise<void> {
    const receiptIds: string[] = tickets.filter(ticket => ticket.status === 'ok').map(ticket => ticket.status);
    const receiptIdChunks = this.expo.chunkPushNotificationReceiptIds(receiptIds);

    for (let chunk of receiptIdChunks) {
      try {
        let receipts = await this.expo.getPushNotificationReceiptsAsync(chunk);
        this.logger.log(receipts);

        for (let receiptId in receipts) {
          let { status, details } = receipts[receiptId];
          if (status === 'ok') {
            continue;
          } else if (status === 'error') {
            this.logger.error(`Error sending notification: ${status}`);
            if (details && details) {
              this.logger.error(`Error code: ${details}`);
            }
          }
        }
      } catch (error) {
        this.logger.error(error);
      }
    }
  }
}
