import { Test, TestingModule } from '@nestjs/testing';
import { BouldersResolver } from './boulders.resolver';
import { BouldersService } from './boulders.service';

describe('BouldersResolver', () => {
  let resolver: BouldersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BouldersResolver, BouldersService],
    }).compile();

    resolver = module.get<BouldersResolver>(BouldersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
