import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { brotliDecompressSync } from 'zlib';
import { Bid } from './Bid.entity';
import { Shop } from './Shop.entity';

@Entity('Auction')
export class Auction {
  @PrimaryGeneratedColumn() id: number;

  @Column()
  name: String;

  @Column()
  description: String;

  @Column()
  image: String;

  @Column()
  category: String;

  @Column()
  dateStart: String;

  @Column()
  dateEnd: String;

  @ManyToOne(() => Shop, (shop) => shop.auctions)
  shop: Shop;

  @OneToMany(() => Bid, (bid) => bid.auction)
  bids: Bid[];
}
