import { Test, TestingModule } from '@nestjs/testing';
import { VentasResolver } from './ventas.resolver';
import { VentasService } from './ventas.service';

describe('VentasResolver', () => {
  let resolver: VentasResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VentasResolver, VentasService],
    }).compile();

    resolver = module.get<VentasResolver>(VentasResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
