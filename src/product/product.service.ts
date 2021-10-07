/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import repositoriesStore from 'src/database/repository/repositories';
import { Product } from 'src/database/entity/Product.entity';

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

    repositoriesStore.getProductRepository().save(product);
  }
}
