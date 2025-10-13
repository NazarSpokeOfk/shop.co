import { Module } from "@nestjs/common";
import { GoodsController } from "controllers/goods.controller";
import { GoodsService } from "services/goods.service";
import { PrismaModule } from "prisma/prisma.module";

@Module({
    providers : [GoodsService],
    controllers : [GoodsController],
    imports : [PrismaModule]
})
export class GoodsModule {};