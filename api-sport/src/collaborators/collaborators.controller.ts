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
import { CollaboratorsService } from './collaborators.service'
import { CreateCollaboratorDto } from './dto/create-collaborators.dto'
import { UpdateCollaboratorDto } from './dto/update-collaborators.dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@Controller('collaborators')
  @ApiTags("collaborators")  
export class CollaboratorsController {
  constructor(private readonly collaboratorsService: CollaboratorsService) {}

  @Post()
  @ApiOperation({ summary: "Create a collaborator" })
  async create(@Body() createCollaboratorDto: CreateCollaboratorDto) {
    return this.collaboratorsService.create(createCollaboratorDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all collaborators" })
  async findAll(@Query() query: any) {
    return this.collaboratorsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: "Get a collaborator by id" })
  async findOne(@Param('id') id: string) {
    return this.collaboratorsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: "Update a collaborator by id" })
  async update(@Param('id') id: string, @Body() updateCollaboratorDto: UpdateCollaboratorDto) {
    return this.collaboratorsService.update(id, updateCollaboratorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: "Delete a collaborator by id" })
  async remove(@Param('id') id: string) {
    return this.collaboratorsService.remove(id);
  }


}
