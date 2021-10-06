import { Injectable } from '@nestjs/common';
import repositoriesStore from 'src/database/repository/repositories';
import User from 'src/database/entity/User.entity';

@Injectable()
export class UsersService {
  constructor() {}

  //async findOne(email: String, password: String): Promise<User> {
  // const user = await repositoriesStore
  //    .getUserRepository()
  //    .findOne({ email: email, password: password });
  //  console.log(user);
  // return user;
  // }

  async addUser(data: {
    firstname: String;
    lastname: String;
    email: String;
    username: String;
    phone: number;
    password: String;
  }) {
    const user = new User();
    user.firstName = data.firstname;
    user.lastName = data.lastname;
    user.email = data.email;
    user.phoneNumber = data.phone;
    user.username = data.username;
    user.password = data.password;

    repositoriesStore.getUserRepository().save(user);
  }

  async deleteUser() {}
}
