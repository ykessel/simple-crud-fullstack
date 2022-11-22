import { CreateVentaInput } from './create-venta.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVentaInput extends PartialType(CreateVentaInput) {
  @Field(() => String)
  ventaId: string;
}
