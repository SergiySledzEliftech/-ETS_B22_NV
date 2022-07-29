import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'static'));
  app.enableCors();
  app.use(cookieParser());
  // app.useGlobalGuards(new JwtAuthGuard())
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
