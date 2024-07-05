import { Module } from '@nestjs/common'
import { CollaboratorsService } from './collaborators.service'
import { CollaboratorsController } from './collaborators.controller'
import { CollaboratorsEntity } from './entities/collaborators.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from 'src/users/entities/users.entity'

@Module({
  imports: [TypeOrmModule.forFeature([CollaboratorsEntity, UserEntity])],
  controllers: [CollaboratorsController],
  providers: [CollaboratorsService]
})
export class CollaboratorsModule {}
