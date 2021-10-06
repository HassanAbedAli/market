import { Injectable } from '@nestjs/common';
import User from 'src/database/entity/User.entity';
import repositoriesStore from 'src/database/repository/repositories';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: String, password: String): Promise<any | User> {
    console.log(email);
    const user = await repositoriesStore
      .getUserRepository()
      .findOne({ where: { email: email, password: password } });
    if (user) {
      return user;
    }
    return null;
  }
}
