import { getCustomRepository, getRepository, Repository } from 'typeorm';
import { Auction } from '../entity/Auction.entity';
import { Bid } from '../entity/Bid.entity';
import { Product } from '../entity/Product.entity';
import { Shop } from '../entity/Shop.entity';
import User from '../entity/User.entity';
import UserRepository from './UserRepository';

export default class repositoriesStore {
  //static readonly shopRepository = getConnection().getRepository(Shop);
  //static readonly userRepository =
  //getConnection().getCustomRepository(UserRepository);

  static getUserRepository(): Repository<User> {
    return getCustomRepository(UserRepository);
  }

  static getShopRepository(): Repository<Shop> {
    return getRepository(Shop);
  }

  static getProductRepository(): Repository<Product> {
    return getRepository(Product);
  }

  static getAuctionRepository(): Repository<Auction> {
    return getRepository(Auction);
  }

  static getBidRepository(): Repository<Bid> {
    return getRepository(Bid);
  }
}
