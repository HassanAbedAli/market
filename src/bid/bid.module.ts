/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import repositoriesStore from 'src/database/repository/repositories';
import { BidController } from './bid.controller';
import { BidService } from './bid.service';

@Module({
  imports: [repositoriesStore],
  controllers: [BidController],
  providers: [BidService],
  exports: [BidService],
})
export class BidModule {}
