import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import {
  Body,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import repositoriesStore from 'src/database/repository/repositories';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authSer: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: String, password: String) {
    console.log('in validate method');

    const user = this.authSer.validateUser(email, password);

    console.log(user);
    if (!user) {
      throw new UnauthorizedException();
    } else {
      return user;
    }
  }
}
