import { ShopService } from './shop.service';
import { Module } from '@nestjs/common';
import { ShopController } from './shop.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [ShopService],
  controllers: [ShopController],
})
export class ShopModule {}
