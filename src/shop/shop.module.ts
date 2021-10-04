import { ShopService } from './shop.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopController } from './shop.controller';
//import { ShopEntity } from './shop.entity';
//import { ShopService } from './shop.service';

@Module({
  imports: [],
  providers: [ShopService],
  controllers: [ShopController],
})
export class ShopModule {}
