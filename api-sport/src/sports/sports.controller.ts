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
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@Controller('sports')
@ApiTags("Sports")  
export class SportsController {
  constructor(private readonly sportsService: SportsService) {}

  @Post()
  @ApiOperation({ summary: "Create one sport" })
  public async create(@Body() createSportDto: CreateSportDto) {
    return this.sportsService.createService(createSportDto)
  }

  @Get()
  @ApiOperation({ summary: "Get all sports" })
  public async findAll() {
    return this.sportsService.getAllService()
  }

  @Get('types')
  @ApiOperation({ summary: "Get all types sports by name" })
  public async findAllTypes(@Query('name') name: string) {
    return await this.sportsService.getAllTypes(name)
  }

  @Get(':id')
  @ApiOperation({ summary: "Search for a sport by id" })
  public async findOne(@Param('id') id: string) {
    return await this.sportsService.getOneService(id)
  }

  @Patch(':id')
  @ApiOperation({ summary: "Patch a sport" })
  public async update(
    @Param('id') id: string,
    @Body() updateSportDto: UpdateSportDto
  ) {
    return this.sportsService.updateService(id, updateSportDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: "Remove sport" })
  public async remove(@Param('id') id: string) {
    return this.sportsService.deleteService(id)
  }
}
