import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginCheckInput {
  @Field()
  userName: string;

  @Field()
  userPassword: string;
}