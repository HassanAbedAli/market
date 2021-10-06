/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param, Render } from '@nestjs/common';
import repositoriesStore from 'src/database/repository/repositories';

// THIS ONE IS FROM THE PUBLIC POINT OF VIEW
@Controller()
export class ProductsController {
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
}
