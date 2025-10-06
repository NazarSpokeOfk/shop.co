console.log("Current dirname:", __dirname);
console.log("Looking for:", require("path").resolve(__dirname, "../generated/prisma/index.js"));
import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { PrismaClient } from '@generated/prisma';

@Injectable()
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}