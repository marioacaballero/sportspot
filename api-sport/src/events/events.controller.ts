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
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@Controller('events')
@ApiTags("Events")
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}
  
  
  @Post('/')
  @ApiOperation({ summary: "Create event" })
  public async create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.createService(createEventDto)
  }

  @Post('/visit')
    @ApiOperation({ summary: "Events visited by a user" })
  public async visitEvent(@Body() { eventId, userId}) {
    return this.eventsService.visitEvent(eventId, userId)
  }

  @Get()
    @ApiOperation({ summary: "Get all events" })
  public async findAll(@Query() query: any) {
    return this.eventsService.getAllService(query)
  }

  @Get('/visit-event')
    @ApiOperation({ summary: "Events visited by a user by date (day, week, month)" })
  public async getVisitEvent(@Query() query: any) {
    const {userId, filter} = query
    return this.eventsService.getLastVisitedEvents(userId, filter)
  }

  @Get('/favorites/:id')
    @ApiOperation({ summary: "Find all favorite events" })
  public async findAllFavorites(@Param('id') id: string) {
    return this.eventsService.getFavorites(id)
  }

  @Get(':id')
    @ApiOperation({ summary: "Find one event by id" })
  public async findOne(@Param('id') id: string) {
    return await this.eventsService.getOneService(id)
  }

  @Patch(':id')
    @ApiOperation({ summary: "Patch one event by id" })
  public async update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto
  ) {
    return this.eventsService.updateService(id, updateEventDto)
  }

  @Delete(':id')
    @ApiOperation({ summary: "Removeh one event by id" })    
  public async remove(@Param('id') id: string) {
    return this.eventsService.deleteService(id)
  }
}
