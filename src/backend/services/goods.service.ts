import { Injectable } from '@nestjs/common';
import { FilterByParameters } from 'DTO/good.filterByParameters.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class GoodsService {
  constructor(private prisma: PrismaService) {}

  async selectByName(goodName: string) {
    const good_name = goodName.trim();
    try {
       const good = await this.prisma.goods.findFirst({
        where: {
          good_name: {
            contains: good_name,
            mode: 'insensitive',
          },
        },
      });
      return good
    } catch (error) {
      throw new Error('There was an error in selectByName : ', error);
    }
  }

  async filterByParameters({
    category,
    startPrice,
    endPrice,
    color,
    size,
    dressStyle,
    sex
  }: FilterByParameters) {
    try {
      let filters: any = {};

      if (category) {
        filters.category = category;
      }

      if(sex) {
        filters.sex = sex
      }

      if (color) {
        filters.color = color;
      }

      if (size) {
        filters.size = size;
      }

      if (dressStyle) {
        filters.dress_style = dressStyle;
      }

      if (startPrice || endPrice) {
        filters.price = {};
        if (startPrice) filters.price.gte = startPrice;
        if (endPrice) filters.price.lte = endPrice;
      }

      const goods = await this.prisma.goods.findMany({
        where: filters,
      });

      return goods;
      // нужно еще рейтинг продукта добавить
    } catch (error) {
      throw new Error('There was an error in filterByParameters : ', error);
    }
  }
}
