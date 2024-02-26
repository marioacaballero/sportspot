import { Injectable } from '@nestjs/common'

@Injectable()
export class GoogleStrategyService {
  create() {
    return 'This action adds a new googleStrategy'
  }

  findAll() {
    return `This action returns all googleStrategy`
  }

  findOne(id: number) {
    return `This action returns a #${id} googleStrategy`
  }

  update(id: number) {
    return `This action updates a #${id} googleStrategy`
  }

  remove(id: number) {
    return `This action removes a #${id} googleStrategy`
  }
}
