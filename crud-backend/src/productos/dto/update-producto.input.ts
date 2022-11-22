import { CreateProductoInput } from './create-producto.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductoInput extends PartialType(CreateProductoInput) {
  @Field(() => String)
  productoId: string;
}
