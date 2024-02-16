import { Module } from '@nestjs/common'
import { JsonwebtokenService } from './jsonwebtoken.service'
import { JsonwebtokenController } from './jsonwebtoken.controller'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [
    JwtModule.register({
      secret: 'secreto_supersecreto',
      signOptions: { expiresIn: '1h' } // Opciones de firma, puedes ajustar el tiempo de expiración
    })
  ],
  controllers: [JsonwebtokenController],
  providers: [JsonwebtokenService]
})
export class JsonwebtokenModule {}
