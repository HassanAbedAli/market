import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import { Product } from '../entity/Product.entity';

@EntityRepository(Product)
export default class ProductRepository extends Repository<Product> {
  async getAllProductsOfShop(shopId: number) {
    const shopAndItsProducts = await this.createQueryBuilder('shop')
      .leftJoinAndSelect('shop.products', 'product')
      .where('shop.id = :shopId', { shopId })
      .getOne();
  }

  async getAllAuctionsOfShop(shopId: number) {
    const shopAndItsProducts = await this.createQueryBuilder('shop')
      .leftJoinAndSelect('shop.auctions', 'auction')
      .where('shop.id = :shopId', { shopId })
      .getOne();
  }
}
