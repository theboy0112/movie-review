import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CheckService } from './check.service';
import { Check } from './entities/check.entity';
import { CreateCheckInput } from './dto/create-check.input';
import { UpdateCheckInput } from './dto/update-check.input';
import { LoginCheckInput } from './dto/login-check.input';
@Resolver(() => Check)
export class CheckResolver {
  constructor(private readonly checkService: CheckService) {}

  @Mutation(() => Check)
  createCheck(@Args('createCheckInput') createCheckInput: CreateCheckInput) {
    return this.checkService.create(createCheckInput);
  }
@Mutation(() => Boolean)
async login(
  @Args('loginCheckInput') loginCheckInput: LoginCheckInput,
): Promise<boolean> {
  const { userName, userPassword } = loginCheckInput;
  const user = await this.checkService.findUser(userName, userPassword);
  return !!user;
}

  @Query(() => [Check], { name: 'check' })
  findAll() {
    return this.checkService.findAll();
  }

  @Query(() => Check, { name: 'check' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.checkService.findOne(id);
  }

  @Mutation(() => Check)
  updateCheck(@Args('updateCheckInput') updateCheckInput: UpdateCheckInput) {
    return this.checkService.update(
      updateCheckInput.studentId,
      updateCheckInput,
    );
  }

  @Mutation(() => Check)
  removeCheck(@Args('id', { type: () => Int }) id: number) {
    return this.checkService.remove(id);
  }
}
