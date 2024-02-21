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
import { EventsService } from './events.service'
import { CreateEventDto } from './dto/create-event.dto'
import { UpdateEventDto } from './dto/update-event.dto'

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  public async create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.createService(createEventDto)
  }

  @Get()
  public async findAll(@Query() query: any) {
    return this.eventsService.getAllService(query)
  }

  @Get('/favorites/:id')
  public async findAllFavorites(@Param('id') id: string) {
    return this.eventsService.getFavorites(id)
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return await this.eventsService.getOneService(id)
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto
  ) {
    return this.eventsService.updateService(id, updateEventDto)
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return this.eventsService.deleteService(id)
  }
}
