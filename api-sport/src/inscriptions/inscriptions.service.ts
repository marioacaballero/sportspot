import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInscriptionDto } from './dto/create-inscription.dto';
import { UpdateInscriptionDto } from './dto/update-inscription.dto';
import { Inscription } from './entities/inscription.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InscriptionsService {
  constructor(
    @InjectRepository(Inscription)
    private readonly inscriptionRepository: Repository<Inscription>,
  ) {}
  async create(createInscriptionDto: CreateInscriptionDto): Promise<Inscription> {
    const inscription = this.inscriptionRepository.create(createInscriptionDto);
    return await this.inscriptionRepository.save(inscription);
  }

  async findAll(): Promise<Inscription[]> {
    return await this.inscriptionRepository.find();
  }

  async findOne(id: number): Promise<Inscription> {
    const inscription = await this.inscriptionRepository.findOne({where:{id}});
    if (!inscription) {
      throw new NotFoundException(`Inscription with ID ${id} not found`);
    }
    return inscription;
  }

  async update(id: number, updateInscriptionDto: UpdateInscriptionDto): Promise<Inscription> {
    const inscription = await this.inscriptionRepository.preload({
      id: +id,
      ...updateInscriptionDto,
    });
    if (!inscription) {
      throw new NotFoundException(`Inscription with ID ${id} not found`);
    }
    return await this.inscriptionRepository.save(inscription);
  }

  async remove(id: number): Promise<void> {
    const result = await this.inscriptionRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Inscription with ID ${id} not found`);
    }
  }
}
