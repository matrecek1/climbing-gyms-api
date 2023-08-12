import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBoulderInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;
}
