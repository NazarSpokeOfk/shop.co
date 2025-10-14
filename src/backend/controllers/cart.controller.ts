import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { DeleteGoodFromCart } from 'DTO/cart.deleteGoodFromCart.dto';
import { AddGoodToCart } from 'DTO/cart.addGoodToCart.dto';

import { CartService } from 'services/cart.service';

import { sendResponseUtility } from 'utils/sendResponseUtility';

@Controller('cart')
export class CartController {
  constructor(private CartService: CartService) {}

  @Post('add-good')
  async addGoodToCart(@Body() addGoodToCart: AddGoodToCart) {
    const { good_id, user_id, quantity, total_price } = addGoodToCart;

    try {
      const addingGoodToCart = await this.CartService.addGoodToCart({
        good_id,
        user_id,
        quantity,
        total_price,
      });

      sendResponseUtility(addingGoodToCart, null);
    } catch (error) {
      sendResponseUtility(null+ error);
    }
  }

  @Get(':id')
  async getGoodsFromCart(@Param('id') id: number) {
    try {
      const gettingGoodsFromCart = await this.CartService.getGoodsFromCart(id);
      sendResponseUtility(gettingGoodsFromCart, null);
    } catch (error) {
      sendResponseUtility(null+ error);
    }
  }

  @Post('delete-good')
  async deleteGoodFromCart(@Body() deleteGoodFromCart: DeleteGoodFromCart) {
    const { user_id, good_id } = deleteGoodFromCart;

    try {
      const deletingGoodFromCart = await this.CartService.deleteGoodFromCart({
        user_id,
        good_id,
      });

      sendResponseUtility(deletingGoodFromCart,null)
    } catch (error) {
      sendResponseUtility(null+ error);
    }
  }
}
