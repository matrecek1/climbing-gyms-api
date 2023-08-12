import { Injectable } from '@nestjs/common';
import { CreateGymInput } from './dto/create-gym.input';
import { UpdateGymInput } from './dto/update-gym.input';
import { Gym } from './entities/gym.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GymsService {
  constructor(@InjectRepository(Gym) private gymsRepository: Repository<Gym>) {}

  create(createGymInput: CreateGymInput) {
    const newGym = this.gymsRepository.create(createGymInput);
    return this.gymsRepository.save(newGym);
  }

  findAll() {
    return this.gymsRepository.find();
  }

  findOne(id: number) {
    return this.gymsRepository.findOneBy({ id: id });
  }

  async update(id: number, updateGymInput: UpdateGymInput) {
    return await this.gymsRepository.update(id, updateGymInput);
  }

  remove(id: number) {
    return this.gymsRepository.delete(id);
  }
}
