import { Test, TestingModule } from '@nestjs/testing';
import { CheckResolver } from './check.resolver';
import { CheckService } from './check.service';

describe('CheckResolver', () => {
  let resolver: CheckResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckResolver, CheckService],
    }).compile();

    resolver = module.get<CheckResolver>(CheckResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
