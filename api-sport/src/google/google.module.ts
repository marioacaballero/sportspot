import { Module } from '@nestjs/common'
import { GoogleStrategyService } from './google.service'
import { GoogleStrategyController } from './google.controller'

@Module({
  controllers: [GoogleStrategyController],
  providers: [GoogleStrategyService]
})
export class GoogleStrategyModule {}
