import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException
} from '@nestjs/common'
import { DocumentsService } from './documents.service'
import { CreateDocumentDto } from './dto/create-document.dto'
import { UpdateDocumentDto } from './dto/update-document.dto'

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}
  @Get()
  async getAllFiles() {
    return this.documentsService.getAllFiles()
  }

  @Get(':id')
  async getFileById(@Param('id') id: string) {
    const document = await this.documentsService.getFileById(+id) // Convertir a número usando el operador + (parseInt también es válido)

    if (!document) {
      throw new NotFoundException('Document not found')
    }

    return document
  }

  @Post()
  async createFile(@Body() createDocumentDto: CreateDocumentDto) {
    return this.documentsService.createFile(createDocumentDto)
  }

  @Patch(':id')
  async updateFile(
    @Param('id') id: string,
    @Body() updateDocumentDto: UpdateDocumentDto
  ) {
    const document = await this.documentsService.updateFile(
      +id,
      updateDocumentDto
    )

    if (!document) {
      throw new NotFoundException('Document not found')
    }

    return document
  }

  @Delete(':id')
  async deleteFile(@Param('id') id: string) {
    await this.documentsService.deleteFile(+id)
    return { message: 'Document deleted successfully' }
  }
}
