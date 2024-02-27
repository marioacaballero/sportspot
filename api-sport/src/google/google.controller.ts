import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common'
import { GoogleStrategyService } from './google.service'

import { AuthGuard } from '@nestjs/passport'

@Controller('google-strategy')
export class GoogleStrategyController {
  constructor(private readonly googleStrategyService: GoogleStrategyService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req, @Res() res) {
    const jwtToken = req.user.accessToken // Puedes generar un token JWT aquí si lo deseas
    res.redirect(`/login?token=${jwtToken}`) // Redirige a la URL deseada después de la autenticación
  }
}
