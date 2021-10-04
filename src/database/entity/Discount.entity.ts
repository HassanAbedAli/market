import { IsDate, Max, Min } from 'class-validator';
import { Product } from './Product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Discount')
export class Discount {
  @PrimaryGeneratedColumn() id: number;

  @Column()
  name: String;

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
