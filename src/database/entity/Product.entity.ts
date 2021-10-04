import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Discount } from './Discount.entity';
import { Shop } from './Shop.entity';

@Entity('Product')
export class Product {
  @PrimaryGeneratedColumn() id: number;

  @Column()
  name: String;

  @Column()
  description: String;

  @Column()
  image: String;

  @Column()
  category: String;

  @OneToOne(() => Discount)
  @JoinColumn()
  discount: Discount;

  @ManyToOne(() => Shop, (shop) => shop.products)
  shop: Shop;
}
