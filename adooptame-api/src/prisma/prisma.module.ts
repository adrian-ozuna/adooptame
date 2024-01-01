import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [PrismaClient],
  providers: [PrismaService]
})
export class PrismaModule {}
