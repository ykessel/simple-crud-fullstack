import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAlmaceneInput {
  @Field(() => String, { description: 'Encargado del alamcen' })
  encargado: string;
  @Field(() => String, { description: 'Direccion del alamcen' })
  direccion: string;
}
