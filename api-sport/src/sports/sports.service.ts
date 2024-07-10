import { Injectable, HttpException } from '@nestjs/common'
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
        { name: 'marcha', type: '', description: null },
        { name: 'carrera', type: '', description: null },
        { name: 'ciclismo', type: '', description: null },
        { name: 'triatlon', type: '', description: null },
        { name: 'trail', type: '', description: null },
        { name: 'padel', type: '', description: null },
        { name: 'tenis', type: '', description: null },
        { name: 'fitness', type: '', description: null },
        { name: 'escalada', type: '', description: null },
        { name: 'orientacion', type: '', description: null },
        { name: 'patinaje', type: '', description: null },
        { name: 'golf', type: '', description: null }
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
    const sport = await this.sportsRepository
      .createQueryBuilder('sport')
      .where({ id })
      .getOne()

    if (!sport) {
      throw new HttpException(`Deporte con ID ${id} no encontrado`, 404)
    }

    return sport
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
      throw new HttpException(`Deporte con ID ${id} no encontrado`, 404)
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
