import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class Almacene {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'Id del alamacen' })
  almacenId: string;
  @Column()
  @Field(() => String, { description: 'Encargado del alamcen' })
  encargado: string;
  @Column()
  @Field(() => String, { description: 'Direccion del alamcen' })
  direccion: string;
}
