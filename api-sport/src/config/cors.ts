import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface'

export const CORS: CorsOptions = {
  origin: 'exp://192.168.18.82:8081',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true
}
