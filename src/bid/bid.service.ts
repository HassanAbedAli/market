/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Bid } from 'src/database/entity/Bid.entity';
import repositoriesStore from 'src/database/repository/repositories';

@Injectable()
export class BidService {
  async addBid(data: any) {
    const bid = new Bid();

    bid.name = data.name;
    bid.amount = data.amount;
    bid.comment = data.comment;
    bid.auction = await repositoriesStore
      .getAuctionRepository()
      .findOne({ id: data.auctionId });

    bid.bidder = await repositoriesStore
      .getUserRepository()
      .findOne({ id: data.bidderId });

    await repositoriesStore.getBidRepository().save(bid);
  }

  async deleteBid(bidId: number) {
    await repositoriesStore.getBidRepository().delete({ id: bidId });
  }

  async editBid(bidId: number, data: any) {
    await repositoriesStore.getBidRepository().update(bidId, {
      name: data.name,
      amount: data.amount,
      comment: data.comment,
    });
  }
}
