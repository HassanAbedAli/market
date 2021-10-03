import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Authenticated } from './authenticated.guard';
import { LocalStrategy } from './local.strategy';
import { LoginGuard } from './login.guard';
import { SessionSerializer } from './session.serializer';
import { UsersModule } from '../users/users.module';
@Module({
  providers: [
    AuthService,
    LocalStrategy,
    SessionSerializer,
    LoginGuard,
    Authenticated,
  ],
  imports: [UsersModule],
})
export class AuthModule {}
