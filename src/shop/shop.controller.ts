import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Discount } from 'src/database/entity/Discount.entity';
import { Product } from 'src/database/entity/Product.entity';
import { Shop } from 'src/database/entity/Shop.entity';
import ProductRepository from 'src/database/repository/ProductRepository';
import { getCustomRepository, getRepository } from 'typeorm';
import { ShopService } from './shop.service';

@Controller()
export class ShopController {
  constructor(private service: ShopService) {}

  @Get('/shops')
  getAllShops() {
    this.service.getAllShops();
  }

  @Get('/shops/:id')
  getShopById(@Param('id') shopId: number) {
    this.service.getShopById(shopId);
  }

  @Post('/shops')
  createShop(@Body() data) {
    this.service.createShop(data);
  }

  @Delete('shops/:id')
  deleteShop(@Param('id') shopId: number) {
    this.service.deleteShop(shopId);
  }

  @Post('/product')
  async addProduct(
    @Body()
    data: {
      shopId: number;
      name: String;
      description?: String;
      image?: String;
      category: String;
      discountPercent?: number;
      discountStartDate?: Date;
      discountEndDate?: Date;
    },
  ) {
    const discountRep = getRepository(Discount);
    const discount = await discountRep.findOne({ id: 1 });

    const product = new Product();
    product.name = data.name;
    product.description = data.description;
    product.image = data.image;
    product.discount = discount;
    product.category = data.category;

    const productRep = getCustomRepository(ProductRepository);
    const shopRep = getRepository(Shop);

    product.shop = await shopRep.findOne({ id: 1 });
    console.log(product);
    //productRep.addProduct(product);
  }
}
