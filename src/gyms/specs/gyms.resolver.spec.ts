import { Test, TestingModule } from '@nestjs/testing';
import { GymsResolver } from '../gyms.resolver';
import { GymsService } from '../gyms.service';

describe('GymsResolver', () => {
  let resolver: GymsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GymsResolver, GymsService],
    }).compile();

    resolver = module.get<GymsResolver>(GymsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
