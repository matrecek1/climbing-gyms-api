import { Injectable } from '@nestjs/common';
import { CreateWallInput } from './dto/create-wall.input';
import { UpdateWallInput } from './dto/update-wall.input';
import { Wall } from './entities/wall.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WallsService {
  constructor(
    @InjectRepository(Wall) private wallsRepository: Repository<Wall>,
  ) {}

  create(createWallInput: CreateWallInput) {
    const newWall = this.wallsRepository.create(createWallInput);
    return this.wallsRepository.save(newWall);
  }

  findAll() {
    return this.wallsRepository.find();
  }

  findOne(id: number) {
    return this.wallsRepository.findOneBy({ id: id });
  }

  async update(id: number, updateWallInput: UpdateWallInput) {
    return await this.wallsRepository.update(id, updateWallInput);
  }

  remove(id: number) {
    return this.wallsRepository.delete(id);
  }
}
