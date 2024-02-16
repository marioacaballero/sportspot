import { Controller, Post, Request } from '@nestjs/common'
import { JsonwebtokenService } from './jsonwebtoken.service'

@Controller('jsonwebtoken')
export class JsonwebtokenController {
  constructor(private jsonwebtokenService: JsonwebtokenService) {}

  // @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.jsonwebtokenService.login(req.user)
  }
}
