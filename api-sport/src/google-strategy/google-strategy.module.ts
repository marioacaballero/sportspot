import { Module } from '@nestjs/common';
import { GoogleStrategyService } from './google-strategy.service';
import { GoogleStrategyController } from './google-strategy.controller';

@Module({
  controllers: [GoogleStrategyController],
  providers: [GoogleStrategyService],
})
export class GoogleStrategyModule {}
