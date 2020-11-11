import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

import 'dotenv/config';
const appPort = process.env.APP_PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(appPort);
  Logger.log(`Server running on http://localhost:${appPort}`)
}
bootstrap();
