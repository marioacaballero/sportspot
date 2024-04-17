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
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger'

@Controller('users')
  @ApiTags("Users")
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly sendMailsService: SendMailsService
  ) {}

  @Get()
  @ApiOperation({ summary: "Get all users" })
    @ApiResponse({status:200, description: "Return all users"})
  public async getAll() {
    return await this.userService.getAllService()
  }

  @Get(':id')
  @ApiOperation({ summary: "Get one user" })
  @ApiParam({ name: 'id', description: 'The id of the user', required: true, type: String })
  @ApiResponse({ status: 200, description: "Return all users" })
  @ApiResponse({status: 404, description: "Return in not found of user"})
  public async getOne(@Param('id') id: string) {
    return await this.userService.getOneService(id)
  }

  @Get('eventsUser/:eventId')
  @ApiOperation({ summary: "Get event from a user by id event" })
  public async getAllEventsUser(@Param('eventId') eventId: string) {
    return await this.userService.getAllEventsUsersService(eventId)
  }

  @Post()
  public async create(@Body() body: UserDTO) {
    //await this.sendMailsService.sendRegistrationNotification(body.email)
    return await this.userService.register(body)
  }

  @Post(':id')
  async suscribeEvents(
    @Param('id') id: string,
    @Body("eventId") eventId: string
  ): Promise<UserEntity> {
    return this.userService.addSubscriptionService(id, eventId)
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
