import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/database/repository/repository.module';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService],
  imports: [RepositoryModule],
})
export class UsersModule {}
