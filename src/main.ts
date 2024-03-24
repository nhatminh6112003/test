import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common/pipes';
import { urlencoded, json } from 'express';
import { useContainer } from 'class-validator';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import cors from 'cors';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.enableCors({
  //   allowedHeaders: '*',
  //   origin: [
  //     'http://localhost:3000',
  //     'https://frontend-test-nestjs.vercel.app',
  //   ],
  // });
  const config = new DocumentBuilder()
    .setTitle('Backend Generator')
    .setDescription('Documentation API Test1')
    .setVersion('1.0')
    .setBasePath('api/v1')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' })
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    customSiteTitle: 'Backend Generator',
    customfavIcon: 'https://avatars.githubusercontent.com/u/6936373?s=200&v=4',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js',
    ],
    customCssUrl: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css',
    ],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.use(json({ limit: '50mb' }));

  app.use(urlencoded({ limit: '50mb', extended: true }));

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const port = process.env.PORT || 5000;

  await app.listen(port);

  return port;
}
bootstrap();
