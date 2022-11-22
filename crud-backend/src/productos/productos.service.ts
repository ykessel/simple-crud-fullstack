import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductoInput } from './dto/create-producto.input';
import { UpdateProductoInput } from './dto/update-producto.input';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
    ) {}

  async create(createProductoInput: CreateProductoInput): Promise<Producto> {
    const producto = this.productoRepository.create(createProductoInput);
    return await this.productoRepository.save(producto);
  }

  async findAll(): Promise<Array<Producto>> {
    return await this.productoRepository.find();
  }

  async findOne(productoId: string): Promise<Producto> {
    const producto = await this.productoRepository.findOne(productoId);
    if (!producto) {
      throw new NotFoundException(`Producto #${productoId} no encontrada`);
    }
    return producto;
  }

  async update(
    productoId: string,
    updateProductoInput: UpdateProductoInput,
  ): Promise<Producto> {
    const producto = await this.productoRepository.preload({
      productoId: productoId,
      ...updateProductoInput,
    });
    if (!producto) {
      throw new NotFoundException(`Producto #${productoId} no encontrada`);
    }
    return this.productoRepository.save(producto);
  }

  async remove(productoId: string): Promise<Producto> {
    const producto = await this.findOne(productoId);
    await this.productoRepository.remove(producto);
    return {
      productoId: productoId,
      nombre: '',
      precio: 0
    };
  }
}
