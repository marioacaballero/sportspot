import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as morgan from 'morgan'
import { ValidationPipe } from '@nestjs/common'
import { CORS } from './config/cors'
import { json, urlencoded } from 'express'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.use(morgan('dev'))
  app.enableCors(CORS)

  app.use(json({ limit: '100mb' }))
  app.use(urlencoded({ limit: '100mb', extended: true }))

  app.useGlobalPipes(
    new ValidationPipe({
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  ) //con este global pipe puedo utilizar los dto a traves del ValidationPipe

  const configService = app.get(ConfigService) //para usar variable de entorno

  await app.listen(+configService.get('PORT') || 3000)
  console.log(`Api running on: localhost:3000`)
}
bootstrap()
