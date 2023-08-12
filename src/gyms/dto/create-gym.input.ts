import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateGymInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;
}
