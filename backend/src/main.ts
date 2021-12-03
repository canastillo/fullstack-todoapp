import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger()

  app.enableCors()
  await app.listen(4001);
  logger.log(`Server running on ${ await app.getUrl() }`)
}
bootstrap();
