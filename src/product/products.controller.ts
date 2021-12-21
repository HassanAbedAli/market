/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Redirect,
  Render,
  Req,
} from '@nestjs/common';
import repositoriesStore from 'src/database/repository/repositories';
import { ProductService } from './product.service';

@Controller()
export class ProductsController {
  constructor(private service: ProductService) {}

  @Get('/products')
  @Render('AllProducts')
  async getAllProducts() {
    return { products: await repositoriesStore.getProductRepository().find() };
  }

  @Get('/')
  @Render('main')
  async getMain() {
    return {
      products: await repositoriesStore
        .getProductRepository()
        .find({ take: 3 }),
      auctions: await repositoriesStore
        .getAuctionRepository()
        .find({ take: 3, relations: ['bids'] }),
    };
  }

  @Get('/products/:id')
  @Render('ProductDetail')
  async getProductById(@Param('id') productId: number) {
    return await repositoriesStore
      .getProductRepository()
      .findOne({ id: productId }, { relations: ['shop'] });
  }

  @Get('/auctions')
  @Render('AllAuctions')
  async getAllAuctions() {
    return {
      auctions: await repositoriesStore
        .getAuctionRepository()
        .find({ relations: ['bids'] }),
    };
  }

  @Get('/auctions/:id')
  @Render('AuctionDetail')
  async getAuctionById(@Param('id') auctionId: number, @Req() req) {
    console.log(req.user);
    return {
      auction: await repositoriesStore
        .getAuctionRepository()
        .findOne(auctionId, { relations: ['bids'] }),
      user: req.user,
    };
  }

  @Post('/auctions')
  @Redirect()
  async addAuction(@Body() data: any) {
    await this.service.addAuction(data);
    return { url: `../shops/${data.shopId}` };
  }

  @Post('/products')
  @Redirect()
  async addProduct(@Body() data: any) {
    await this.service.addProduct(data);
    return { url: `../shops/${data.shopId}` };
  }

  @Post('/products/delete/:id')
  @Redirect()
  async deleteProduct(@Param('id') productId: number, @Body() reqBody: any) {
    await this.service.deleteProduct(productId);
    return { url: `../../../shops/${reqBody.shopId}` };
  }

  @Post('/products/edit/:id')
  @Redirect()
  async editProduct(@Param('id') productId: number, @Body() data: any) {
    console.log(productId);
    console.log(data);
    await this.service.editProduct(productId, data);
    return { url: `../../../shops/${data.shopId}` };
  }

  @Post('/auctions/delete/:id')
  @Redirect()
  async deleteAuction(@Param('id') auctionId: number, @Body() reqBody: any) {
    await this.service.deleteAuction(auctionId);
    return { url: `../../../shops/${reqBody.shopId}` };
  }

  @Post('/auctions/edit/:id')
  @Redirect()
  async editAuction(@Param('id') auctionId: number, @Body() data: any) {
    console.log(data);
    await this.service.editAuction(auctionId, data);
    return { url: `../../../shops/${data.shopId}` };
  }

  @Post('/products/search')
  @Render('AllProducts')
  async getProductsBySearch(@Body() data: any) {
    console.log(data);
    const products = await this.service.getProductsByFilter(data.search);
    return { products: products };
  }

  @Post('/products/range')
  @Render('AllProducts')
  async getProductsByRange(@Body() data: any) {
    console.log(data);
    const products = await this.service.getProductsByRange(data.min, data.max);
    return { products: products };
  }

  @Post('/products/sort')
  @Render('AllProducts')
  async getProductsBySort(@Body() data: any) {
    console.log(data);
    const products = await this.service.getProductsBySort(data.sort);
    return { products: products };
  }
}
