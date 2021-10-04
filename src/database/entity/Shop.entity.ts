import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Auction } from './Auction.entity';
import { Product } from './Product.entity';
import User from './User.entity';

@Entity('Shop')
export class Shop {
  @PrimaryGeneratedColumn() id: number;

  @ManyToOne(() => User, (user) => user.shops)
  user: User;

  @Column()
  name: String;

  @Column()
  description: String;

  @Column()
  phoneNumber: String;

  @Column()
  location: String;

  @OneToMany(() => Product, (product) => product.shop)
  products: Product[];

  @OneToMany(() => Auction, (auction) => auction.shop)
  auctions: Auction[];
}
