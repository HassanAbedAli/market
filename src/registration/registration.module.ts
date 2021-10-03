import { Module } from '@nestjs/common';
import { Authenticated } from 'src/auth/authenticated.guard';
import { UsersService } from 'src/users/users.service';
import { LoginGuard } from '../auth/login.guard';
import { RegistrationController } from './registration.controller';

@Module({})
export class RegistrationModule {
  providers: [RegistrationController];
  imports: [LoginGuard, Authenticated, UsersService];
}
