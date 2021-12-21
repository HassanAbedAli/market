/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Param, Post, Redirect } from '@nestjs/common';
import { BidService } from './bid.service';

@Controller('/bids')
export class BidController {
  constructor(private service: BidService) {}

  @Post('/')
  @Redirect()
  async createBid(@Body() data: any) {
    await this.service.addBid(data);
    return { url: `./auctions/${data.auctionId}` };
  }

  @Post('/delete/:id')
  @Redirect()
  async deleteBid(@Param('id') bidId: number, @Body() reqBody: any) {
    await this.service.deleteBid(bidId);
    return { url: `../../../shops/${reqBody.shopId}` };
  }

  @Post('/edit/:id')
  @Redirect()
  async editBid(@Param('id') bidId: number, @Body() data: any) {
    console.log(bidId);
    console.log(data);
    await this.service.editBid(bidId, data);
    return { url: `../../../shops/${data.shopId}` };
  }
}
