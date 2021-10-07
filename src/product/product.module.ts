import { ProductService } from './product.service';
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import repositoriesStore from 'src/database/repository/repositories';

@Module({
  imports: [repositoriesStore],
  controllers: [ProductsController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {
  constructor() {}
}
