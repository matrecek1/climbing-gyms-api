import { CreateGymInput } from './create-gym.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGymInput extends PartialType(CreateGymInput) {
  @Field(() => String)
  name: string;
}
