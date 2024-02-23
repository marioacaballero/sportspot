import { Body, Controller, Param, Post } from '@nestjs/common'
import { ResetCodeService } from './reset-code.service'

@Controller('reset-code')
export class ResetCodeController {
  constructor(private readonly resetCodeService: ResetCodeService) {}

  @Post('reset-password')
  async sendResetPasswordMail(@Body() body: { email: string }) {
    return this.resetCodeService.sendResetCodeEmail(body.email)
  }

  @Post('validate-reset-code/:userId')
  async validateResetCode(
    @Param('userId') userId: string,
    @Body()
    body: {
      code: string
      email: string
      password: string
    }
  ) {
    return this.resetCodeService.validateResetCode(
      userId,
      body.code,
      body.email,
      body.password
    )
  }
}
