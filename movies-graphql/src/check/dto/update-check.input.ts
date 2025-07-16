import { CreateCheckInput } from './create-check.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCheckInput extends PartialType(CreateCheckInput) {
  @Field(() => Int)
  studentId: number;
  @Field(()=> String)
  userName: string;
  @Field(()=> String)
  userPassword: string;
}
