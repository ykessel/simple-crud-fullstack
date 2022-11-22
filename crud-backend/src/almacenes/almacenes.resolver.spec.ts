import { Test, TestingModule } from '@nestjs/testing';
import { AlmacenesResolver } from './almacenes.resolver';
import { AlmacenesService } from './almacenes.service';

describe('AlmacenesResolver', () => {
  let resolver: AlmacenesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlmacenesResolver, AlmacenesService],
    }).compile();

    resolver = module.get<AlmacenesResolver>(AlmacenesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
