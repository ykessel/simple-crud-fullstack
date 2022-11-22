import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateVentaInput {
  @Field(() => String, { description: 'Nombre del vendedor' })
  vendedor: string;
  @Field(() => String, { description: 'Nombre del comprador' })
  comprador: string;
}
