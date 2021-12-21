import { IsDate, Max, Min } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne(() => Shop, (shop) => shop.products)
  shop: Shop;

  @Column()
  price: number;

  @Column()
  @Min(0)
  @Max(100)
  percentage: number;

  @Column()
  @IsDate()
  dateStart: Date;

  @Column()
  @IsDate()
  dateEnd: Date;
}
