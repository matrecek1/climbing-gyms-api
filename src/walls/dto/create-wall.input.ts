import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWallInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Int)
  angle: number;
}
