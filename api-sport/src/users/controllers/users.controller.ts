import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { UsersService } from '../services/users.service'
import { UserEntity } from '../entities/users.entity'
import { UserDTO } from '../dto/user.dto'
import { UpdateUserDto } from '../dto/update-user.dto'
import { SendMailsService } from 'src/send-mails/send-mails.service'

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly sendMailsService: SendMailsService
  ) {}

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
    //await this.sendMailsService.sendRegistrationNotification(body.email)
    return await this.userService.register(body)
  }

  @Patch('unsuscribe/:id')
  async deleteSubscription(
    @Param('id') id: string,
    @Body('eventId') eventId: string
  ): Promise<UserEntity> {
    return this.userService.deleteSubscriptionService(id, eventId)
  }
  @Patch('favorite/:id')
  async favoriteEvent(
    @Param('id') id: string,
    @Body('eventId') eventId: string
  ): Promise<UserEntity> {
    // console.log(id)
    return this.userService.eventFavoritesService(id, eventId)
  }

  @Patch('password/:id')
  async changePassword(
    @Param('id') id: string,
    @Body('oldPassword') oldPassword: string,
    @Body('newPassword') newPassword: string
  ): Promise<UserEntity> {
    return this.userService.changePasswordService(id, oldPassword, newPassword)
  }

  @Patch(':id')
  async updateController(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<UserEntity> {
    return this.userService.updateService(id, updateUserDto)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.deleteService(id)
  }
}
