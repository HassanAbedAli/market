/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import repositoriesStore from 'src/database/repository/repositories';
import { Shop } from '../database/entity/Shop.entity';

@Injectable()
export class ShopService {
  //static readonly shopRepositry = getRepository(Shop)

  constructor() {}

  async createShop(data: any) {
    const shop = new Shop();
    shop.name = data.name;
    shop.description = data.description;
    shop.phoneNumber = data.phoneNumber;
    shop.location = data.location;
    shop.user = await repositoriesStore.getUserRepository().findOne({
      id: data.userId,
    });
    repositoriesStore.getShopRepository().save(shop);
  }

  async deleteShop(shopId: number) {
    repositoriesStore.getShopRepository().delete({ id: shopId });
  }

  async getShopById(shopId: number): Promise<Shop> {
    return repositoriesStore
      .getShopRepository()
      .findOne(shopId, { relations: ['products', 'auctions'] });
  }

  async getAllShops(): Promise<Shop[]> {
    return repositoriesStore.getShopRepository().find();
  }

  async getShopDetailsProductsAndAuction(shopId: number) {
    return repositoriesStore.getShopRepository().preload({ id: shopId });
  }
}
