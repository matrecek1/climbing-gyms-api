import { CreateWallInput } from './create-wall.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWallInput extends PartialType(CreateWallInput) {
  @Field(() => String)
  name?: string;

  @Field(() => String)
  description?: string;

  @Field(() => Int)
  angle?: number;
}
