import { Injectable } from '@nestjs/common';
import { CreateBoulderInput } from './dto/create-boulder.input';
import { UpdateBoulderInput } from './dto/update-boulder.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Boulder } from './entities/boulder.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BouldersService {
  constructor(
    @InjectRepository(Boulder) private boulderRepository: Repository<Boulder>,
  ) {}

  create(createBoulderInput: CreateBoulderInput) {
    const newBoulder = this.boulderRepository.create(createBoulderInput);
    return this.boulderRepository.save(newBoulder);
  }

  findAll() {
    return this.boulderRepository.find();
  }

  findOne(id: number) {
    return this.boulderRepository.findOneBy({ id: id });
  }

  async update(id: number, updateBoulderInput: UpdateBoulderInput) {
    return await this.boulderRepository.update(id, updateBoulderInput);
  }

  remove(id: number) {
    return this.boulderRepository.delete(id);
  }
}
