import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export default class User {
  @PrimaryGeneratedColumn() id: number;

  @Column()
  username: String;

  @Column()
  password: String;
}
