import { Injectable } from '@nestjs/common';
import { AddGoodToCart } from 'DTO/cart.addGoodToCart.dto';
import { DeleteGoodFromCart } from 'DTO/cart.deleteGoodFromCart.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async addGoodToCart({
    good_id,
    user_id,
    quantity,
    total_price,
  }: AddGoodToCart) {
    try {
      return this.prisma.cart.create({
        data: {
          good_id,
          user_id,
          quantity,
          total_price,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async getGoodsFromCart(user_id: number) {
    try {
      return this.prisma.cart.findMany({ where: { user_id } });
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteGoodFromCart({ user_id, good_id }: DeleteGoodFromCart) {
    try {
      return this.prisma.cart.deleteMany({
        where: {
          user_id,
          good_id,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
