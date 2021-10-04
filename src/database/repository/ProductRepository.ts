import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import { Product } from '../entity/Product.entity';

@EntityRepository(Product)
export default class ProductRepository extends Repository<Product> {
  addProduct(product: Product) {
    this.save(product);
  }
}
