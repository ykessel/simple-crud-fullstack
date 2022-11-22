import { CreateAlmaceneInput } from './create-almacene.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAlmaceneInput extends PartialType(CreateAlmaceneInput) {
  @Field(() => String)
  almacenId: string
}
