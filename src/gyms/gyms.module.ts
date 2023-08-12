import { Module } from '@nestjs/common';
import { GymsService } from './gyms.service';
import { GymsResolver } from './gyms.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gym } from './entities/gym.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gym])],
  providers: [GymsResolver, GymsService],
})
export class GymsModule {}
