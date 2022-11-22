import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlmaceneInput } from './dto/create-almacene.input';
import { UpdateAlmaceneInput } from './dto/update-almacene.input';
import { Almacene } from './entities/almacene.entity';

@Injectable()
export class AlmacenesService {
  constructor(@InjectRepository(Almacene) private readonly almacenRepository: Repository<Almacene>) {}

  async create(createAlmacenInput: CreateAlmaceneInput): Promise<Almacene> {
    const almacen = this.almacenRepository.create(createAlmacenInput);
    return await this.almacenRepository.save(almacen);
  }

  async findAll(): Promise<Array<Almacene>> {
    return await this.almacenRepository.find();
  }

  async findOne(almacenId: string): Promise<Almacene> {
    const almacen = await this.almacenRepository.findOne(almacenId);
    if (!almacen) {
      throw new NotFoundException(`Almacen #${almacenId} no encontrado`);
    }
    return almacen;
  }

  async update(
    almacenId: string,
    updateAlmacenInput: UpdateAlmaceneInput,
  ): Promise<Almacene> {
    const almacen = await this.almacenRepository.preload({
      almacenId: almacenId,
      ...updateAlmacenInput,
    });
    if (!almacen) {
      throw new NotFoundException(`Almacen #${almacenId} no encontrado`);
    }
    return this.almacenRepository.save(almacen);
  }

  async remove(almacenId: string): Promise<Almacene> {
    const almacen = await this.findOne(almacenId);
    await this.almacenRepository.remove(almacen);
    return {
      almacenId: almacenId,
      encargado: '',
      direccion: ''
    };
  }
}
