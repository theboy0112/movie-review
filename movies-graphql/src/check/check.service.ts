import { Injectable } from '@nestjs/common';
import { CreateCheckInput } from './dto/create-check.input';
import { UpdateCheckInput } from './dto/update-check.input';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CheckService {
  constructor(private prisma: PrismaService) {}

  async create(createCheckInput: CreateCheckInput) {
    return this.prisma.login.create({
      data: {
        userName: createCheckInput.userName,
        userPassword: createCheckInput.userPassword,
      },
    });
  }
  async findUser(userName: string, userPassword: string) {
  return this.prisma.login.findFirst({
    where: {
      userName,
      userPassword,
    },
  });
}


  findAll() {
    return `This action returns all check`;
  }

  findOne(id: number) {
    return `This action returns a #${id} check`;
  }

  update(id: number, updateCheckInput: UpdateCheckInput) {
    return `This action updates a #${id} check`;
  }

  remove(id: number) {
    return `This action removes a #${id} check`;
  }
}
