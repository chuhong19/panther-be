import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Cho phép yêu cầu từ front-end
    methods: 'GET,POST', // Phương thức HTTP cho phép
    allowedHeaders: 'Content-Type, Authorization', // Headers cho phép
  });
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`App is running on http://localhost:${port}`);
}
bootstrap();
