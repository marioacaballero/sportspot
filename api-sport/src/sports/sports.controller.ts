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
import { SportsService } from './sports.service'
import { CreateSportDto } from './dto/create-sport.dto'
import { UpdateSportDto } from './dto/update-sport.dto'

@Controller('sports')
export class SportsController {
  constructor(private readonly sportsService: SportsService) {}

  @Post()
  public async create(@Body() createSportDto: CreateSportDto) {
    return this.sportsService.createService(createSportDto)
  }

  @Get()
  public async findAll() {
    return this.sportsService.getAllService()
  }

  @Get('types')
  public async findAllTypes(@Query('name') name: string) {
    return await this.sportsService.getAllTypes(name)
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return await this.sportsService.getOneService(id)
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateSportDto: UpdateSportDto
  ) {
    return this.sportsService.updateService(id, updateSportDto)
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return this.sportsService.deleteService(id)
  }
}
