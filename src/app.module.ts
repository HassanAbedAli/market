import { DatabaseModule } from './database/database.module';
import { ProductsController } from './product/products.controller';
import { ProductModule } from './product/product.module';
import { RepositoryModule } from './database/repository/repository.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RenderModule } from 'nest-next';
import { AuthModule } from './auth/auth.module';
import { RegistrationModule } from './registration/registration.module';
import { UsersModule } from './users/users.module';
import Next from 'next';
import { RegistrationController } from './registration/registration.controller';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { ShopModule } from './shop/shop.module';

@Module({
  imports: [
    DatabaseModule,
    ProductModule,
    ShopModule,
    RepositoryModule,
    AuthModule,
    RegistrationModule,
    UsersModule,
    NestjsFormDataModule,
    RenderModule.forRootAsync(
      Next({ dev: process.env.NODE_ENV !== 'production' }),
    ),
    TypeOrmModule.forRoot(),
  ],
  controllers: [ProductsController, RegistrationController],
})
export class AppModule {}
