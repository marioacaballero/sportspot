import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common'
import { NotificationsService } from './notifications.service'
import { CreateNotificationDto } from './dto/create-notification.dto'
import { UpdateNotificationDto } from './dto/update-notification.dto'

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  public async create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationsService.createService(createNotificationDto)
  }

  @Get()
  public async findAll() {
    return this.notificationsService.getAllService()
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return this.notificationsService.getOneService(id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNotificationDto: UpdateNotificationDto
  ) {
    return this.notificationsService.updateService(id, updateNotificationDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationsService.deleteService(id)
  }
}
