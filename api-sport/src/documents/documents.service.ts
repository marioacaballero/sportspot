import { Injectable } from '@nestjs/common'
import { CreateDocumentDto } from './dto/create-document.dto'
import { UpdateDocumentDto } from './dto/update-document.dto'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { DocumentEntity } from './entities/document.entity'

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(DocumentEntity)
    private fileRepository: Repository<DocumentEntity>
  ) {}

  async getFileById(id: any): Promise<DocumentEntity> {
    return this.fileRepository.findOne({ where: { id } })
  }
  async getAllFiles(): Promise<DocumentEntity[]> {
    return this.fileRepository.find()
  }
  async createFile(
    createDocumentDto: CreateDocumentDto
  ): Promise<DocumentEntity> {
    const file = this.fileRepository.create(createDocumentDto)
    return this.fileRepository.save(file)
  }

  async updateFile(
    id: number,
    updateDocumentDto: UpdateDocumentDto
  ): Promise<DocumentEntity> {
    const file = await this.getFileById(id)
    if (!file) {
      throw new Error('Documento no encontrado')
    }
    this.fileRepository.merge(file, updateDocumentDto)
    return this.fileRepository.save(file)
  }

  async deleteFile(id: number): Promise<void> {
    const file = await this.getFileById(id)
    if (!file) {
      throw new Error('Documento no encontrado')
    }
    await this.fileRepository.delete(id)
  }
}
