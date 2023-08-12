import { CreateBoulderInput } from './create-boulder.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBoulderInput extends PartialType(CreateBoulderInput) {
  @Field(() => String)
  name?: string;

  @Field(() => String)
  description?: string;
}
