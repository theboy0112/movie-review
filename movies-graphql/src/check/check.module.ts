import { Module } from '@nestjs/common';
import { CheckService } from './check.service';
import { CheckResolver } from './check.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [CheckResolver, CheckService , PrismaService],
})
export class CheckModule {}
