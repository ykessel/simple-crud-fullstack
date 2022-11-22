import { Module } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { VentasResolver } from './ventas.resolver';
import { Venta } from './entities/venta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Venta])],
  providers: [VentasResolver, VentasService]
})
export class VentasModule {}
