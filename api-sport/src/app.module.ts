import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataSourceConfig } from './config/data.source'
import { EventsModule } from './events/events.module'
import { NotificationsModule } from './notifications/notifications.module'
import { SportsModule } from './sports/sports.module'
import { JsonwebtokenModule } from './jsonwebtoken/jsonwebtoken.module'
import { SendMailsModule } from './send-mails/send-mails.module'
import { join } from 'path'
import { PassportModule } from '@nestjs/passport'
import { StripeModule } from './stripe/stripe.module'
import { ReviewModule } from './reviews/reviews.module'
import { PushNotificationModule } from './notification-push/notification.module'
import { CollaboratorsModule } from './collaborators/collaborators.module'


//import { GoogleStrategyModule } from './google/google.module'
import { DocumentsModule } from './documents/documents.module';
import { InscriptionsModule } from './inscriptions/inscriptions.module';
console.log(join(__dirname, 'template'))
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'google' }),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot(DataSourceConfig),
    UsersModule,
    EventsModule,
    DocumentsModule,
    NotificationsModule,
    PushNotificationModule,
    SportsModule,
    CollaboratorsModule,
    JsonwebtokenModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    SendMailsModule,
    StripeModule.forRootAsync(),
    ReviewModule,
    InscriptionsModule,
    //GoogleStrategyModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
