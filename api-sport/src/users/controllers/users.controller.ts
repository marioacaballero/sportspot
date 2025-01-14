import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query
} from '@nestjs/common'
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger'
import { SendMailsService } from 'src/send-mails/send-mails.service'
import { EventEntity } from '../../events/entities/event.entity'
import { UpdateUserDto } from '../dto/update-user.dto'
import { UserDTO } from '../dto/user.dto'
import { UserEntity } from '../entities/users.entity'
import { UsersService } from '../services/users.service'

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly sendMailsService: SendMailsService
  ) {}


  @Post()
  async create(@Body() createUserDto: UserDTO) {
 try {
  console.log("esto es createUserDto", createUserDto)
  if (createUserDto.googleId || createUserDto.appleId || createUserDto.facebookId) {
    console.log("entra con google")
    return this.userService.createUserAuth(createUserDto);
  } else {
    return this.userService.create(createUserDto);
  }
 } catch (error) {
  console.log(error)
 }
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all users' })
  public async getAll() {
    return await this.userService.getAllService()
  }

  @Post('stripe/create-customer')
  @ApiOperation({ summary: 'crear customer user' })
  async createCustomer(
    @Body('email') email: string,
    @Body('name') name: string,
  ) {
    try {
      const customer = await this.userService.createCustomer(email, name);
      return { success: true, customer };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
  @Post('create-subscription')
  @ApiOperation({ summary: 'create suscription' })
  async createSubscription(
    @Body('customerId') customerId: string,
    @Body('priceId') priceId: string,
  ) {
    try {
      const subscription = await this.userService.createSubscription(customerId, priceId);
      return { success: true, subscription };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @Get('email')
  public async getUserEmail(@Query('email') email: string) {
    return await this.userService.getByEmailService(email)
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one user' })
  @ApiParam({
    name: 'id',
    description: 'The id of the user',
    required: true,
    type: String
  })
  @ApiResponse({ status: 200, description: 'Return all users' })
  @ApiResponse({ status: 404, description: 'Return in not found of user' })
  public async getOne(@Param('id') id: string) {
    return await this.userService.getOneService(id)
  }

  @Get('eventsUser/:eventId')
  @ApiOperation({ summary: 'Get event from a user by id event' })
  public async getAllEventsUser(@Param('eventId') eventId: string) {
    return await this.userService.getAllEventsUsersService(eventId)
  }

  // @Post()
  // @ApiOperation({ summary: 'Register user' })
  // public async create(@Body() body: UserDTO) {
  //   //await this.sendMailsService.sendRegistrationNotification(body.email)
  //   return await this.userService.register(body)
  // }

  @Post('rol/:id')
  @ApiOperation({ summary: 'Change user rol' })
  public async changeRol(@Param('id') id: string) {
    return await this.userService.changeRolUser(id)
  }

  @Post(':id')
  @ApiOperation({ summary: 'Relate a user to an event' })
  async suscribeEvents(
    @Param('id') id: string,
    @Body('eventId') eventId: string
  ): Promise<UserEntity> {
    return this.userService.addSubscriptionService(id, eventId)
  }

  @Patch('/userPreferences/:id')
  @ApiOperation({ summary: 'change the user preferences' })
  async changeUserPreferences(
    @Param('id') id: string,
    @Body('userPreferences') userPreferences: JSON
  ): Promise<UserEntity> {
    return this.userService.changeUserPreferences(id, userPreferences)
  }


  @Post('subscribe/:userId')
  @ApiOperation({ summary: 'Subscribe a user to an event' })
  async subscribeToEvent(
    @Param('userId') userId: string,
    @Body('eventId') eventId: string
  ): Promise<EventEntity> {
    return this.userService.subscribeToEventService(userId, eventId);
  }

  @Patch('unsuscribe/:id')
  @ApiOperation({ summary: 'Unsubscribe a user with an event' })
  async deleteSubscription(
    @Param('id') id: string,
    @Body('eventId') eventId: string
  ): Promise<EventEntity> {
    return this.userService.deleteSubscriptionService(id, eventId)
  }
  @Patch('favorite/:id')
  @ApiOperation({ summary: 'Add an event as a favorite to a user' })
  async favoriteEvent(
    @Param('id') id: string,
    @Body('eventId') eventId: string
  ): Promise<EventEntity> {
    return this.userService.eventFavoritesService(id, eventId)
  }

  @Patch('password/:id')
  @ApiOperation({ summary: 'Change user password' })
  async changePassword(
    @Param('id') id: string,
    @Body('oldPassword') oldPassword: string,
    @Body('newPassword') newPassword: string
  ): Promise<UserEntity> {
    return this.userService.changePasswordService(id, oldPassword, newPassword)
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user by id' })
  async updateController(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<UserEntity> {
    return this.userService.updateService(id, updateUserDto)
  }

  @Get('rol/:id')
  @ApiOperation({ summary: 'Update user rol' })
  updateUserRolController(@Param('id') id: string): string {
    const updateUserDto: UpdateUserDto = { rol: 'organizer' }
    this.userService.updateService(id, updateUserDto)
    this.userService.mailOrganizer(id)
    return '<h1>Usuario cambiado a ORGANIZADOR satisfactoriamente</h1>'
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user' })
  delete(@Param('id') id: string) {
    return this.userService.deleteService(id)
  }

  @Get('subscriptions/:userId')
@ApiOperation({ summary: 'Get all subscriptions for a user' })
async getUserSubscriptions(
  @Param('userId') userId: string
): Promise<EventEntity[]> {
  return this.userService.getUserSubscriptions(userId);
}

}
