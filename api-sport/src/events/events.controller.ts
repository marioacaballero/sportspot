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
import { EventEntity } from './entities/event.entity'

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

  @Get('subscribed/:userId')
  @ApiOperation({ summary: 'Get all subscribed events for a user' })
  public async getSubscribedEvents(@Param('userId') userId: string) {
    return this.eventsService.getSubscribedEvents(userId);
  }

  @Get('subscribers/:eventId')
  @ApiOperation({ summary: 'Get all subscribers for an event' })
  public async getEventSubscribers(@Param('eventId') eventId: string) {
    return this.eventsService.getEventSubscribers(eventId);
  }

  @Post('/finalize/:eventId')
  @ApiOperation({ summary: 'Finalize an event and notify subscribers' })
  public async finalizeEvent(@Param('eventId') eventId: string) {
    await this.eventsService.finalizeEvent(eventId);
    return { message: 'Event finalized and notifications sent' };
  }

  @Post('/event-location')
  @ApiOperation({ summary: 'Create event' })
  public async createNotificationsLocation(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.createServiceAprox(createEventDto);
  }

  @Post('subscribe/:userId/:eventId')
  async subscribeToEvent(@Param('userId') userId: string, @Param('eventId') eventId: string): Promise<void> {
    await this.eventsService.subscribeToEvent(userId, eventId);
  }

  @Get('notifications/:userId')
  async getSubscribedEventsNotification(@Param('userId') userId: string): Promise<EventEntity[]> {
   return await this.eventsService.getSubscribedEventsNotification(userId);
  }

  @Post('notify/:eventId')
  async notifyEventSubscribers(
    @Param('eventId') eventId: string,
    @Body('message') message: string,
    @Body('title') title: string,
  ): Promise<void> {
    await this.eventsService.notifyEventSubscribers(eventId, message,title);
  }

}
