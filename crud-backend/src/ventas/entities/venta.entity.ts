import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class Venta {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'Id de la venta' })
  ventaId: string;
  @Column()
  @Field(() => String, { description: 'Nombre del vendedor' })
  vendedor: string;
  @Column()
  @Field(() => String, { description: 'Nombre del comprador' })
  comprador: string;
}
