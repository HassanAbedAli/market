import { EntityRepository, Repository } from 'typeorm';
import User from '../entity/User.entity';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  async add(username: String, password: String) {
    const user = new User();
    user.username = username;
    user.password = password;
    this.save(user);
  }
}
