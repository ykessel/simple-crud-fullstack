import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVentaInput } from './dto/create-venta.input';
import { UpdateVentaInput } from './dto/update-venta.input';
import { Venta } from './entities/venta.entity';

@Injectable()
export class VentasService {
  constructor(@InjectRepository(Venta) private readonly ventaRepository: Repository<Venta>) {}

  async create(createVentaInput: CreateVentaInput): Promise<Venta> {
    const venta = this.ventaRepository.create(createVentaInput);
    return await this.ventaRepository.save(venta);
  }

  async findAll(): Promise<Array<Venta>> {
    return await this.ventaRepository.find();
  }

  async findOne(ventaId: string): Promise<Venta> {
    const venta = await this.ventaRepository.findOne(ventaId);
    if (!venta) {
      throw new NotFoundException(`Venta #${ventaId} no encontrada`);
    }
    return venta;
  }

  async update(
    ventaId: string,
    updateVentaInput: UpdateVentaInput,
  ): Promise<Venta> {
    const venta = await this.ventaRepository.preload({
      ventaId: ventaId,
      ...updateVentaInput,
    });
    if (!venta) {
      throw new NotFoundException(`Venta #${ventaId} no encontrada`);
    }
    return this.ventaRepository.save(venta);
  }

  async remove(ventaId: string): Promise<Venta> {
    const venta = await this.findOne(ventaId);
    await this.ventaRepository.remove(venta);
    return {
      ventaId: ventaId,
      vendedor: '',
      comprador: ''
    };
  }
}
