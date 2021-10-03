import { Injectable } from '@nestjs/common';
import UserRepository from 'src/database/repository/UserRepository';
import { getCustomRepository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(private userRep: UserRepository) {}

  private readonly users = [
    {
      userId: 1,
      username: 'Hassan',
      password: '12345',
    },
  ];

  async findOne(username: String): Promise<User> {
    return this.users.find((user) => user.username == username);
  }

  async register(username: String, password: String) {
    const rep = getCustomRepository(UserRepository);
    rep.add(username, password);
  }
}

interface User {
  userId: number;
  username: String;
  password: String;
}
