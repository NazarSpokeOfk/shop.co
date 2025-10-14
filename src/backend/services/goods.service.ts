import { Injectable } from '@nestjs/common';
import { FilterByParameters } from 'DTO/good.filterByParameters.dto';
import { GetPhotos } from 'DTO/good.getPhotos.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class GoodsService {
  constructor(private prisma: PrismaService) {}

  async selectByName(goodName: string) {
    const good_name = goodName.trim();
    try {
      const good = await this.prisma.goods.findMany({
        where: {
          good_name: {
            contains: good_name,
            mode: 'insensitive',
          },
        },
      });
      return good;
    } catch (error) {
      throw new Error('There was an error in selectByName : ' + error);
    }
  }

  async filterByParameters({
    category,
    startPrice,
    endPrice,
    color,
    size,
    dressStyle,
    sex,
  }: FilterByParameters) {
    try {
      let filters: any = {};

      if (category) {
        filters.category = category;
      }

      if (sex) {
        filters.sex = sex;
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

      const request = await this.prisma.goods.findMany({
        where: filters,
        select: {
          good_name: true,
          price: true,
          good_id: true,
        },
      });

      const promises = request.map(async (good) => {
        const photo = await this.getPhotos({
          type: "findFirst",
          good_id: good.good_id,
        });
        const rating = await this.calculateRating(good.good_id);

        return {
          photo,
          rating,
          goodName: good.good_name,
          goodId: good.good_id,
          price: good.price,
        };
      });

      const goods = await Promise.all(promises);

      return goods;
    } catch (error) {
      throw new Error('There was an error in filterByParameters : ' + error);
    }
  }

  async calculateRating(good_id: number) {
    try {
      const goodRating = await this.prisma.goods_reviews.findMany({
        where: {
          good_id,
        },
        select: {
          rating: true,
        },
      });

      if (goodRating.length === 0) {
        return 0;
      }

      let finalRating = 0;
      let reviewsCount = 0;

      goodRating.forEach((rating) => {
        finalRating += rating.rating;
        reviewsCount++;
      });

      return finalRating / reviewsCount;
    } catch (error) {
      throw new Error('There was an error in calculateRating : ' + error);
    }
  }

  async getPhotos({ type, good_id }: GetPhotos) {
    try {
      const request = await this.prisma.photos[type]({
        where: {
          good_id,
        },
        select : {
          photo : true
        }
      });
        
      if(request === null) return "There is no photos."

      if("photo" in request) return request.photo;

      return request
    } catch (error) {
      throw new Error('There was an error in getPhotos : ' + error);
    }
  }
}
