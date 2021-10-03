import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: String, pass: String): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password == pass) {
      const { password, ...result } = user;
      console.log('in ValidateUSer');
      return user;
    }
    return null;
  }
}
