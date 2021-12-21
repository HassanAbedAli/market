import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
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
    const user = this.authSer.validateUser(email, password);

    console.log(user);
    if (!user) {
      throw new UnauthorizedException();
    } else {
      return user;
    }
  }
}
