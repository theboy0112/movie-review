import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCheckInput {
  @Field(() => String)
  userName: string;
  @Field(() => String)
  userPassword: string;
}
