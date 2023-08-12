import { Test, TestingModule } from '@nestjs/testing';
import { WallsResolver } from './walls.resolver';
import { WallsService } from './walls.service';

describe('WallsResolver', () => {
  let resolver: WallsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WallsResolver, WallsService],
    }).compile();

    resolver = module.get<WallsResolver>(WallsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
