import { Body, Controller, Post } from '@nestjs/common'
import { JsonwebtokenService } from './jsonwebtoken.service'
import { UsersService } from 'src/users/services/users.service'
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('jwt')
@ApiTags("Jwt")
export class JsonwebtokenController {
  constructor(
    private jsonwebtokenService: JsonwebtokenService,
    private readonly userService: UsersService
  ) {}

  // @UseGuards(LocalAuthGuard)
  @Post('login')
      @ApiOperation({ summary: "Validation by jwt" })
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.userService.getByEmailService(body.email)
    return this.jsonwebtokenService.loginValidate(user, body.password)
  }
}
