import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Producto {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'Id del producto' })
  productoId: string;
  @Column()
  @Field(() => String, { description: 'Nombre del producto' })
  nombre: string;
  @Column('int')
  @Field(() => Int, { description: 'Precio del producto' })
  precio: number;
}
