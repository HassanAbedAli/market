import { IsEmail } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Bid } from './Bid.entity';
import { Shop } from './Shop.entity';

@Entity('User')
export default class User {
  @PrimaryGeneratedColumn() id: number;

  @Column()
  username: String;

  @Column()
  @IsEmail()
  email: String;

  @Column()
  password: String;

  @Column()
  firstName: String;

  @Column()
  lastName: String;

  @Column()
  phoneNumber: number;

  @OneToMany(() => Shop, (shop) => shop.user)
  shops: Shop[];

  @OneToMany(() => Bid, (bid) => bid.bidder)
  bids: Bid[];
}
