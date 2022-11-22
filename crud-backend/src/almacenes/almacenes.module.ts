import { Module } from '@nestjs/common';
import { AlmacenesService } from './almacenes.service';
import { AlmacenesResolver } from './almacenes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Almacene } from './entities/almacene.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Almacene])],
  providers: [AlmacenesResolver, AlmacenesService]
})
export class AlmacenesModule {}
