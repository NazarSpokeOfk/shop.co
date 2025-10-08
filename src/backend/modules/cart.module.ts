import { Module } from "@nestjs/common";
import { CartController } from "controllers/cart.controller";
import { CartService } from "services/cart.service";
import { PrismaModule } from "prisma/prisma.module";

@Module({
    imports : [PrismaModule],
    providers : [CartService],
    controllers : [CartController]
})
export class CartModule {};