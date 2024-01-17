import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true, // 移除dto中无效的参数
    forbidNonWhitelisted: true, // 提示多余的参数的错误
  }))
  await app.listen(3000);
}
bootstrap();
