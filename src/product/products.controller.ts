/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import repositoriesStore from 'src/database/repository/repositories';
import { ProductService } from './product.service';

// THIS ONE IS FROM THE PUBLIC POINT OF VIEW
@Controller()
export class ProductsController {
  constructor(private service: ProductService) {}

  @Get('/products')
  @Render('ProductsList')
  getAllProducts() {
    return repositoriesStore.getProductRepository().find();
  }

  @Get('/products/:id')
  @Render('ProductDetail')
  getProductById(@Param('id') productId: number) {
    return repositoriesStore.getProductRepository().findOne({ id: productId });
  }

  @Get('/auctions')
  getAllAuctions() {
    return repositoriesStore.getAuctionRepository().find({});
  }

  @Get('/auctions/:id')
  @Render('AuctionDetail')
  getAuctionById(@Param('id') auctionId: number) {
    return repositoriesStore.getAuctionRepository().findOne({ id: auctionId });
  }

  @Post('/products')
  addProduct(@Body() data: any) {
    console.log(data);
    return this.service.addProduct(data);
  }
}
