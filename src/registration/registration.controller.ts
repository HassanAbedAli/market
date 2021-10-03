import {
  Body,
  Controller,
  Get,
  Post,
  Redirect,
  Render,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LoginGuard } from '../auth/login.guard';
import { Authenticated } from '../auth/authenticated.guard';
import { UsersService } from 'src/users/users.service';

@Controller('registration')
export class RegistrationController {
  constructor(private userService: UsersService) {}
  @Post('/login')
  @UseGuards(LoginGuard)
  @Redirect('http://localhost:3000/registration/profile')
  Login(): void {
    console.log('someone logged in');
  }

  @Get('/profile')
  @UseGuards(Authenticated)
  @Render('Profile')
  profile(): void {}

  @Post('/logout')
  logout(@Request() req): any {
    req.logout();
    console.log('someone logged out');
  }

  @Get('/signIn')
  @Render('SignIn')
  SignIn(): void {}

  @Post('/register')
  register(@Body() data: { username: String; password: String }) {
    this.userService.register(data.username, data.password);
  }
}
