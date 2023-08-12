import { Module } from '@nestjs/common';
import { WallsService } from './walls.service';
import { WallsResolver } from './walls.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wall } from './entities/wall.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wall])],
  providers: [WallsResolver, WallsService],
})
export class WallsModule {}
