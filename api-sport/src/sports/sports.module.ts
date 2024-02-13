import { Module } from '@nestjs/common'
import { SportsService } from './sports.service'
import { SportsController } from './sports.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SportEntity } from './entities/sport.entity'

@Module({
  imports: [TypeOrmModule.forFeature([SportEntity])],
  controllers: [SportsController],
  providers: [SportsService]
})
export class SportsModule {}
