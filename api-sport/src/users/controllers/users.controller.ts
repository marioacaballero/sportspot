import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { UsersService } from '../services/users.service'
import { UserEntity } from '../entities/users.entity'
import { UserDTO } from '../dto/user.dto'

@Controller('api/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  public async getAll() {
    return await this.userService.getAllService()
  }

  @Get(':id')
  public async getOne(@Param('id') id: string) {
    return await this.userService.getOneService(id)
  }

  @Post()
  public async create(@Body() body: UserDTO) {
    return await this.userService.createService(body)
  }

  @Put(':id')
  async updateNameAndEmail(
    @Param('id') id: string,
    @Body('name') newName: string,
    @Body('email') newEmail: string
  ): Promise<UserEntity> {
    return this.userService.updateService(id, newName, newEmail)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.deleteService(id)
  }
}
