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
console.log(join(__dirname, 'template'))
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot(DataSourceConfig),
    UsersModule,
    EventsModule,
    NotificationsModule,
    SportsModule,
    JsonwebtokenModule,
    SendMailsModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
