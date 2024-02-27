import {
  BadRequestException,
  Injectable,
  InternalServerErrorException
} from '@nestjs/common'
//import { JwtService } from '@nestjs/jwt'
import { UserDTO } from 'src/users/dto/user.dto'
import { UserEntity } from 'src/users/entities/users.entity'
import { Repository } from 'typeorm'

@Injectable()
export class GoogleStrategyService {
  constructor(
    //private jwtService: JwtService,
    private readonly userRepository: Repository<UserEntity>
  ) {}

  generateJwt(payload) {
    console.log(payload)
    //  return this.jwtService.sign(payload)
  }

  async signIn(user) {
    if (!user) {
      throw new BadRequestException('Unauthenticated')
    }

    const userExists = await this.findUserByEmail(user.email)

    if (!userExists) {
      return this.registerUser(user)
    }

    return this.generateJwt({
      sub: userExists.id,
      email: userExists.email
    })
  }

  async registerUser(user: UserDTO) {
    try {
      const newUser = this.userRepository.create(user)
      newUser.nickname = user.name

      await this.userRepository.save(newUser)

      return this.generateJwt({
        sub: newUser.id,
        email: newUser.email
      })
    } catch {
      throw new InternalServerErrorException()
    }
  }

  async findUserByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } })

    if (!user) {
      return null
    }

    return user
  }
}
