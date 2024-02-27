import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserEntity } from 'src/users/entities/users.entity'
import { compare } from 'bcrypt'
import { JwtPayload, sign } from 'jsonwebtoken'
import { HttpException } from '@nestjs/common'

@Injectable()
export class JsonwebtokenService {
  constructor(private jwtService: JwtService) {}

  // Este método firma un JWT con el payload, el secreto y el tiempo de expiración proporcionados.
  public signJWT({
    payload,
    secret,
    expires
  }: {
    payload: JwtPayload
    secret: string
    expires: number | string
  }): string {
    return sign(payload, secret, { expiresIn: expires })
  }

  // Este método valida el inicio de sesión. Compara la contraseña proporcionada con la contraseña almacenada en el usuario.
  public async loginValidate(user: UserEntity, password: string) {
    // Comprueba si la contraseña es correcta
    const checkPassword = await compare(password, user.password)

    if (!checkPassword) {
      throw new HttpException('La contraseña es inválida', 400)
    } else {
      // Si la contraseña es correcta, inicia sesión
      return await this.login(user)
    }
  }

  // Este método verifica la contraseña. Compara la contraseña proporcionada con la contraseña almacenada en el usuario.
  public async verifyPassword(user: UserEntity, password: string) {
    try {
      // Comprueba si la contraseña es correcta
      const checkPassword = await compare(password, user.password)

      if (!checkPassword) {
        throw new HttpException('La contraseña es inválida', 400)
      } else {
        return true
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  // Este método inicia sesión. Firma un JWT con el ID del usuario y el secreto proporcionados.
  public async login(user: UserEntity) {
    try {
      if (user.isDelete) throw new HttpException('El usuario no existe', 404)
      return {
        accesToken: this.signJWT({
          payload: { id: user.id },
          secret: process.env.JWT_SECRET,
          expires: '7d'
        }),
        user
      }
    } catch (error) {
      throw new HttpException('error en login', 501)
    }
  }
}
