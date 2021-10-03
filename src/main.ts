import { NestFactory } from '@nestjs/core';
import session = require('express-session');
import { AppModule } from './app.module';
import passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({ secret: 'nest cats', resave: false, saveUninitialized: false }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
}
bootstrap();
