import { Body, Controller, Post } from '@nestjs/common';
import { JsonwebtokenService } from './jsonwebtoken.service';
import { UsersService } from 'src/users/services/users.service';
import { HttpException } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('jwt')
@ApiTags("Jwt")
export class JsonwebtokenController {
  constructor(
    private jsonwebtokenService: JsonwebtokenService,
    private readonly userService: UsersService
  ) {}

  @Post('login')
  @ApiOperation({ summary: "Validation by jwt" })
  async login(@Body() body: { email: string; password: string }) {
    try {
      const user = await this.userService.getByEmailService(body.email);
      return await this.jsonwebtokenService.loginValidate(user, body.password);
    } catch (error) {
      // Manejar errores
      throw new HttpException(error.message || 'Error de servidor', error.status || 500);
    }
  }

  @Post('google-login')
  async loginGoogle(@Body() body: { googleId: string }) {
    try {
      const user = await this.userService.getByGoogleId(body.googleId);
      return await this.jsonwebtokenService.loginTerceros(user);
    } catch (error) {
      // Manejar errores
      throw new HttpException(error.message || 'Error de servidor', error.status || 500);
    }
  }

  @Post('apple-login')
  async loginApple(@Body() body: { appleId: string }) {
    try {
      const user = await this.userService.getByAppleId(body.appleId);
      return await this.jsonwebtokenService.loginTerceros(user);
    } catch (error) {
      // Manejar errores
      throw new HttpException(error.message || 'Error de servidor', error.status || 500);
    }
  }

  @Post('facebook-login')
  async loginFacebook(@Body() body: { facebookId: string }) {
    try {
      const user = await this.userService.getByFacebookId(body.facebookId);
      return await this.jsonwebtokenService.loginTerceros(user);
    } catch (error) {
      // Manejar errores
      throw new HttpException(error.message || 'Error de servidor', error.status || 500);
    }
  }
}
