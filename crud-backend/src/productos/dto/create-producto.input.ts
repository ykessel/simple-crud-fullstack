import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductoInput {
  @Field(() => String, { description: 'Nombre del producto' })
  nombre: string;
  @Field(() => Int, { description: 'Precio del producto' })
  precio: number;
}
