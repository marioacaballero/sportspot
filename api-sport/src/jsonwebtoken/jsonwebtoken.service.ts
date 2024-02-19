import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserEntity } from 'src/users/entities/users.entity'
import { compare } from 'bcrypt'
import { JwtPayload, sign } from 'jsonwebtoken'

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
    console.log(password)

    try {
      // Comprueba si la contraseña es correcta
      const checkPassword = await compare(password, user.password)

      if (!checkPassword) throw new Error('La contraseña es inválida')
    } catch (error) {
      console.log(error)
    }
    // Si la contraseña es correcta, inicia sesión
    return await this.login(user)
  }

  // Este método inicia sesión. Firma un JWT con el ID del usuario y el secreto proporcionados.
  public async login(user: UserEntity) {
    try {
      return {
        accesToken: this.signJWT({
          payload: { id: user.id },
          secret: process.env.JWT_SECRET,
          expires: '7d'
        }),
        user
      }
    } catch (error) {
      throw Error('error en login')
    }
  }
}