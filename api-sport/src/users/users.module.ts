import { Module } from '@nestjs/common'
import { UsersService } from './services/users.service'
import { UsersController } from './controllers/users.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './entities/users.entity'
import { EventEntity } from 'src/events/entities/event.entity'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, EventEntity])],
  exports: [] /* [que quiero exportar] */,
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
