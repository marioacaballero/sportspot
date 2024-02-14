import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as morgan from 'morgan'
import { ValidationPipe } from '@nestjs/common'
import { CORS } from './config/cors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.use(morgan('dev'))

  app.useGlobalPipes(
    new ValidationPipe({
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  ) //con este global pipe puedo utilizar los dto a traves del ValidationPipe

  const configService = app.get(ConfigService) //para usar variable de entorno

  app.enableCors(CORS)

  await app.listen(+configService.get('PORT') || 3000)
  console.log(`Api running on: localhost:3000`)
}
bootstrap()
