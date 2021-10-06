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
import repositoriesStore from 'src/database/repository/repositories';

@Controller()
export class RegistrationController {
  constructor(private userService: UsersService) {}
  @Post('/login')
  @UseGuards(LoginGuard)
  @Redirect('http://localhost:3000/profile')
  async Login(): Promise<any> {
    console.log('someone logged in');
  }

  @Get('/profile')
  @UseGuards(Authenticated)
  @Render('Profile')
  async profile(@Request() req): Promise<any> {
    const userAndShops = await repositoriesStore
      .getUserRepository()
      .findOne(req.user.id, { relations: ['shops'] });

    console.log(userAndShops);
    return userAndShops;
  }

  @Post('/logout')
  logout(@Request() req): any {
    req.logout();
    console.log('someone logged out');
  }

  @Post('/user')
  async test(@Body() data) {
    console.log(data);
    const user = await repositoriesStore
      .getUserRepository()
      .findOne({ where: { email: data.email, password: data.password } });

    console.log(user);

    if (user) console.log('not null');
  }

  @Get('/signIn')
  @Render('SignIn')
  SignIn(): void {}

  @Post('/register')
  //@Redirect
  @FormDataRequest()
  register(
    @Body()
    data: any,
  ) {
    console.log(data);
    this.userService.addUser(data);
  }

  @Get('/register')
  @Render('Register')
  getRegisterPage() {}
}
