/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import UserRepository from './UserRepository';

@Module({
  imports: [],
  controllers: [],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class RepositoryModule {}
