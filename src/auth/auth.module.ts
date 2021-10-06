import { Module } from '@nestjs/common';
import { Authenticated } from './authenticated.guard';
import { LocalStrategy } from './local.strategy';
import { LoginGuard } from './login.guard';
import { SessionSerializer } from './session.serializer';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
@Module({
  providers: [
    LocalStrategy,
    SessionSerializer,
    LoginGuard,
    Authenticated,
    AuthService,
  ],
  imports: [UsersModule],
})
export class AuthModule {}
