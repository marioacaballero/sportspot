import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class JsonwebtokenService {
  constructor(private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    // Aquí deberías verificar las credenciales del usuario, por ejemplo, en una base de datos
    // const user = await yourUserService.findUserByUsername(username)

    /* if (user && user.password === password) {
      return user
    } */
    console.log(username, password)
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
