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
import { FormDataRequest } from 'nestjs-form-data';

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
  @FormDataRequest()
  register(@Body() data: { username: String; password: String }) {
    console.log(data);
    this.userService.register(data.username, data.password);
  }

  @Get('/product')
  @Render('Product')
  props() {
    return {
      title: 'Product Test title',
    };
  }
}
