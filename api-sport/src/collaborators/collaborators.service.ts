import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCollaboratorDto } from './dto/create-collaborators.dto';
import { UpdateCollaboratorDto } from './dto/update-collaborators.dto'; 
import { CollaboratorsEntity } from './entities/collaborators.entity';

@Injectable()
export class CollaboratorsService {
  constructor(
    @InjectRepository(CollaboratorsEntity)
    private readonly collaboratorsRepository: Repository<CollaboratorsEntity>,
  ) {}

  async create(createCollaboratorDto: CreateCollaboratorDto): Promise<CollaboratorsEntity> {
    const newCollaborator = this.collaboratorsRepository.create(createCollaboratorDto);
    return await this.collaboratorsRepository.save(newCollaborator);
  }

  async findAll(): Promise<CollaboratorsEntity[]> {
    return await this.collaboratorsRepository.find();
  }

  async findOne(id: string): Promise<CollaboratorsEntity> {
    const collaborator = await this.collaboratorsRepository.findOne({where:{id}});
    if (!collaborator) {
      throw new NotFoundException(`Collaborator with id ${id} not found`);
    }
    return collaborator;
  }

  async update(id: string, updateCollaboratorDto: UpdateCollaboratorDto): Promise<CollaboratorsEntity> {
    const existingCollaborator = await this.collaboratorsRepository.findOne({where:{id}});
    if (!existingCollaborator) {
      throw new NotFoundException(`Collaborator with id ${id} not found`);
    }
    const updatedCollaborator = {
      ...existingCollaborator,
      ...updateCollaboratorDto,
    };
    return await this.collaboratorsRepository.save(updatedCollaborator);
  }

  async remove(id: string): Promise<CollaboratorsEntity> {
    const collaboratorToRemove = await this.collaboratorsRepository.findOne({where:{id}});
    if (!collaboratorToRemove) {
      throw new NotFoundException(`Collaborator with id ${id} not found`);
    }
    await this.collaboratorsRepository.remove(collaboratorToRemove);
    return collaboratorToRemove;
  }
}
