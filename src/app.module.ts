import { RepositoryModule } from './database/repository/repository.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RenderModule } from 'nest-next';
import { AuthModule } from './auth/auth.module';
import { RegistrationModule } from './registration/registration.module';
import { UsersModule } from './users/users.module';
import Next from 'next';
import { RegistrationController } from './registration/registration.controller';

@Module({
  imports: [
    RepositoryModule,
    AuthModule,
    RegistrationModule,
    UsersModule,

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
      synchronize: true,
      entities: ['src/database/entity/**/*.ts'],
      migrations: ['src/database/migration/**/*.ts'],
      subscribers: ['src/database/subscriber/**/*.ts'],
      cli: {
        entitiesDir: 'src/database/entity',
        migrationsDir: 'src/database/migration',
        subscribersDir: 'src/database/subscriber',
      },
    }),
  ],
  controllers: [RegistrationController],
})
export class AppModule {}
