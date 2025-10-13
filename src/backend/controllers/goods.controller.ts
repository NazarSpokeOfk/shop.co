import { Post, Body, Controller } from '@nestjs/common';
import { sendResponseUtility } from 'utils/sendResponseUtility';

import { GoodsService } from 'services/goods.service';

import { FilterByParameters } from 'DTO/good.filterByParameters.dto';

@Controller('goods')
export class GoodsController {
  constructor(private GoodsService: GoodsService) {}

  @Post("search")
  async selectByName(@Body('good_name') good_name: string) {
    try {
      const good = await this.GoodsService.selectByName(good_name);
      return sendResponseUtility(good, null);
    } catch (error) {
      sendResponseUtility(null, error);
    }
  }

  @Post("filter")
  async filterByParameters(@Body() filter: FilterByParameters) {
    const { category, startPrice, endPrice, color, size, dressStyle, sex } = filter;

    try {
      const goods = await this.GoodsService.filterByParameters({
        category,
        startPrice,
        endPrice,
        color,
        size,
        dressStyle,
        sex
      });

      return sendResponseUtility(goods, null);
    } catch (error) {
      sendResponseUtility(null, error);
    }
  }
}
