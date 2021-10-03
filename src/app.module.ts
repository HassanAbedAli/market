import { RepositoryModule } from './database/repository/repository.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RenderModule } from 'nest-next';
import { AuthModule } from './auth/auth.module';
import { RegistrationModule } from './registration/registration.module';
import { UsersModule } from './users/users.module';
import Next from 'next';
import { RegistrationController } from './registration/registration.controller';
import { join } from 'path';
import { NestjsFormDataModule } from 'nestjs-form-data';

@Module({
  imports: [
    RepositoryModule,
    AuthModule,
    RegistrationModule,
    UsersModule,
    NestjsFormDataModule,
    RenderModule.forRootAsync(
      Next({ dev: process.env.NODE_ENV !== 'production' }),
    ),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'Project',
      synchronize: false,
      migrationsRun: false,
      entities: [join('./dist/database/entity', '**', '*.entity.{ts,js}')],
      migrations: ['dist/database/migration/**/*.ts'],
      subscribers: ['dist/database/subscriber/**/*.ts'],
      cli: {
        entitiesDir: 'dist/database/entity',
        migrationsDir: 'dist/database/migration',
        subscribersDir: 'dist/database/subscriber',
      },
    }),
  ],
  controllers: [RegistrationController],
})
export class AppModule {}
