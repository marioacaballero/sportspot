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
}
