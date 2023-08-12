import { Module } from '@nestjs/common';
import { BouldersService } from './boulders.service';
import { BouldersResolver } from './boulders.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Boulder } from './entities/boulder.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Boulder])],
  providers: [BouldersResolver, BouldersService],
})
export class BouldersModule {}
