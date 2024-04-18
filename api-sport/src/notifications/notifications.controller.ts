import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query
} from '@nestjs/common'
import { NotificationsService } from './notifications.service'
import { CreateNotificationDto } from './dto/create-notification.dto'
import { UpdateNotificationDto } from './dto/update-notification.dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@Controller('notifications')
  @ApiTags("Notifications")
  
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  @ApiOperation({ summary: "Create notification" })
  public async create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationsService.createService(createNotificationDto)
  }

  @Get()
  @ApiOperation({ summary: "Get all notifications" })
  public async findAll(@Query() query: any) {
    return this.notificationsService.getAllService(query)
  }

  @Get(':id')
  @ApiOperation({ summary: "Get one notification by id" })
  public async findOne(@Param('id') id: string) {
    return this.notificationsService.getOneService(id)
  }

  @Patch(':id')
  @ApiOperation({ summary: "Update one notification by id" })
  update(
    @Param('id') id: string,
    @Body() updateNotificationDto: UpdateNotificationDto
  ) {
    return this.notificationsService.updateService(id, updateNotificationDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: "Remove one notification by id" })
  remove(@Param('id') id: string) {
    return this.notificationsService.deleteService(id)
  }
}
