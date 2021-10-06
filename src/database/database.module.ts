/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import repositoriesStore from './repository/repositories';

@Module({
  imports: [],
  controllers: [],
  providers: [repositoriesStore],
})
export class DatabaseModule {}
