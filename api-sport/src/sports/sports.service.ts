import { Injectable } from '@nestjs/common'
import { CreateSportDto } from './dto/create-sport.dto'
import { UpdateSportDto } from './dto/update-sport.dto'
import { SportEntity } from './entities/sport.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class SportsService {
  constructor(
    @InjectRepository(SportEntity)
    private readonly sportsRepository: Repository<SportEntity>
  ) {}

  private initialized = false

  async onModuleInit() {
    if (!this.initialized) {
      const sports: CreateSportDto[] = [
        { name: 'futbol', type: '11', description: null },
        { name: 'futbol', type: '5', description: null },
        { name: 'basket', type: '', description: null },
        { name: 'rugby', type: '15', description: null },
        { name: 'rugby', type: '7', description: null },
        { name: 'tenis', type: 'single', description: null },
        { name: 'tenis', type: 'doble', description: null },
        { name: 'handball', type: '', description: null },
        { name: 'ciclismo', type: 'pista', description: null },
        { name: 'ciclismo', type: 'montaña', description: null },
        { name: 'ciclismo', type: 'carretera', description: null },
        { name: 'running', type: '', description: null },
        { name: 'hockey', type: '', description: null }
      ]

      for (const sport of sports) {
        const existingSport = await this.sportsRepository.findOne({
          where: { name: sport.name, type: sport.type }
        })
        if (!existingSport) {
          await this.sportsRepository.save(sport)
        }
      }
    }
  }

  public async createService(createSportDto: CreateSportDto) {
    return await this.sportsRepository.save(createSportDto)
  }

  public async getAllService() {
    return await this.sportsRepository.find({ where: { isDelete: false } })
  }

  public async getOneService(id) {
    return await this.sportsRepository
      .createQueryBuilder('sport')
      .where({ id })
      .getOne()
  }

  public async deleteService(id) {
    await this.sportsRepository.update(id, { isDelete: true })
    return await this.getOneService(id)
  }

  public async updateService(
    id: string,
    updateSportDto: UpdateSportDto
  ): Promise<SportEntity> {
    const sport = await this.sportsRepository
      .createQueryBuilder('sport')
      .where({ id })
      .getOne()

    if (!sport) {
      throw new Error(`Deporte con ID ${id} no encontrado`)
    }

    sport.name = updateSportDto.name
    sport.type = updateSportDto.type
    sport.description = updateSportDto.description

    return await this.sportsRepository.save(sport)
  }

  public async getAllTypes(name: string) {
    return await this.sportsRepository
      .createQueryBuilder('sport')
      .select('sport.type')
      .where('sport.name = :name', { name })
      .distinct(true)
      .getRawMany()
  }
}
