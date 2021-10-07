import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
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
  @Render('ManageShop')
  getShopById(@Param('id') shopId: number) {
    const shop = this.service.getShopById(shopId);
    return shop;
  }

  @Post('/shops')
  createShop(@Body() data) {
    this.service.createShop(data);
  }

  @Post('shops/delete/:id')
  deleteShop(@Param('id') shopId: number) {
    this.service.deleteShop(shopId);
  }
}
