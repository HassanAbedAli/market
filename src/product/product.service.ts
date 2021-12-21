/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import repositoriesStore from 'src/database/repository/repositories';
import { Product } from 'src/database/entity/Product.entity';
import { Auction } from 'src/database/entity/Auction.entity';
import { Between, Like } from 'typeorm';

@Injectable()
export class ProductService {
  async addProduct(data: any) {
    const product = new Product();

    product.name = data.name;
    product.description = data.description;
    product.category = data.category;
    product.image = data.image;
    product.price = data.price;
    product.shop = await repositoriesStore
      .getShopRepository()
      .findOne({ id: data.shopId });

    if (data.percentage) {
      product.percentage = data.percentage;
      product.dateStart = data.discountDateStart;
      product.dateEnd = data.discountDateEnd;
    }

    await repositoriesStore.getProductRepository().save(product);
  }

  async deleteProduct(productId: number) {
    await repositoriesStore.getProductRepository().delete({ id: productId });
  }

  async editProduct(productId: number, data: any) {
    await repositoriesStore.getProductRepository().update(productId, {
      name: data.name,
      description: data.description,
      category: data.category,
      price: data.price,
    });
  }

  async addAuction(data: any) {
    const auction = new Auction();

    auction.name = data.name;
    auction.description = data.description;
    auction.category = data.category;
    auction.image = data.image;
    auction.shop = await repositoriesStore
      .getShopRepository()
      .findOne({ id: data.shopId });

    auction.dateStart = Date.now().toString();
    auction.dateEnd = Date.now().toString();
    await repositoriesStore.getAuctionRepository().save(auction);
  }

  async deleteAuction(auctionId: number) {
    await repositoriesStore.getAuctionRepository().delete({ id: auctionId });
  }

  async editAuction(auctionId: number, data: any) {
    await repositoriesStore.getAuctionRepository().update(auctionId, {
      name: data.name,
      description: data.description,
      category: data.category,
    });
  }

  async getProductsByFilter(filter: string) {
    const products = await repositoriesStore
      .getProductRepository()
      .find({ name: Like(`%${filter}%`) });
    return products;
  }

  async getProductsByRange(min: number, max: number) {
    const products = await repositoriesStore
      .getProductRepository()
      .find({ price: Between(min, max) });
    console.log(products);
    return products;
  }

  async getProductsBySort(asc: string) {
    let products = null;
    if (asc == 'false')
      products = await repositoriesStore
        .getProductRepository()
        .find({ order: { price: 'ASC' } });
    else
      products = await repositoriesStore
        .getProductRepository()
        .find({ order: { price: 'DESC' } });
    return products;
  }
}
