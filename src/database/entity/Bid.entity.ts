import User from 'src/database/entity/User.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Auction } from './Auction.entity';

@Entity('Bid')
export class Bid {
  @PrimaryGeneratedColumn() id: number;

  @ManyToOne(() => User, (bidder) => bidder.bids)
  bidder: User;

  @ManyToOne(() => Auction, (auction) => auction.bids)
  auction: Auction;

  @Column()
  name: String;

  @Column()
  amount: number;

  @Column()
  comment: String;
}
