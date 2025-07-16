import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Check {
   @Field(() => Int)
  studentId: number;
  @Field(()=> String)
  userName: string;
  @Field(()=> String)
  userPassword: string;
}
