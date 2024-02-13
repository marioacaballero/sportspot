import { Injectable } from '@nestjs/common'
import { UserEntity } from '../entities/users.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserDTO } from '../dto/user.dto'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  public async createService(body: UserDTO) {
    return await this.userRepository.save(body)
  }

  public async getAllService() {
    return await this.userRepository.find({ where: { isDelete: false } })
  }
  public async getOneService(id) {
    return await this.userRepository
      .createQueryBuilder('user')
      .where({ id })
      .getOne()
  }

  public async deleteService(id) {
    await this.userRepository.update(id, { isDelete: true })
    return await this.getOneService(id)
  }

  public async updateService(
    id: string,
    newName: string,
    newEmail: string
  ): Promise<UserEntity> {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where({ id })
      .getOne()

    if (!user) {
      throw new Error(`Usuario con ID ${id} no encontrado`)
    }

    user.name = newName
    user.email = newEmail

    return await this.userRepository.save(user)
  }
}
