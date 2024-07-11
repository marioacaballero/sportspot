import { Controller, Get, Post, Res, Body, Patch, Param, HttpStatus, Delete, UseInterceptors, UploadedFile, NotFoundException, UploadedFiles, BadRequestException, HttpException } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';

import { } from '@nestjs/common';
import { Response } from 'express';
import { DocumentEntity } from './entities/document.entity';
import { Express } from 'express';
import { diskStorage } from 'multer';
import path, { extname } from 'path';

const storage = diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    const name = file.originalname.split('.')[0];
    const extension = extname(file.originalname);
    const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
    cb(null, `${name}-${randomName}${extension}`);
  },
});


@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) { }
  @Get()
  async getAllFiles() {
    return this.documentsService.getAllFiles();
  }
  @Get('download/:id')
  async downloadFile(@Param('id') id: string, @Res() res: Response) {
    try {
      // Obtener el documento por su id
      const document = await this.documentsService.getFileById(+id);
      
      if (!document) {
        throw new HttpException('Document not found', HttpStatus.NOT_FOUND);
      }

      // Configurar los encabezados para la descarga del archivo PDF
      res.setHeader('Content-Disposition', `attachment; filename=${document.name}`);
      res.setHeader('Content-Type', 'application/pdf');

      // Enviar el archivo PDF al cliente
      res.send(document.data);
    } catch (error) {
      console.error('Error downloading the PDF:', error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Error downloading the PDF');
    }
  }


  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }
    console.log(file,"filee")
    // Aquí podrías también asignar la URL de la imagen si es relevante
    // document.imageUrl = 'url_aqui';

    const savedDocument = await this.documentsService.uploadFile(file.originalname,file.buffer);

    return savedDocument;
  }
  @Get(':id')
  async getFileById(@Param('id') id: string) {
    const document = await this.documentsService.getFileById(+id); // Convertir a número usando el operador + (parseInt también es válido)

    if (!document) {
      throw new NotFoundException('Document not found');
    }

    return document;
  }
}