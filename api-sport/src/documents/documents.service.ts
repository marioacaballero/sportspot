import { Injectable } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DocumentEntity } from './entities/document.entity';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(DocumentEntity)
    private fileRepository: Repository<DocumentEntity>,
  ) {}

  async uploadFile(name: string, data: Buffer): Promise<DocumentEntity> {
    const newFile = new DocumentEntity();
    newFile.name = name;
    newFile.data = data;

    return this.fileRepository.save(newFile);
  }

  async getFileById(id: any): Promise<DocumentEntity> {
    return this.fileRepository.findOne({where:{id}});
  }
  async getAllFiles(): Promise<DocumentEntity[]> {
    return this.fileRepository.find();
  }


}
