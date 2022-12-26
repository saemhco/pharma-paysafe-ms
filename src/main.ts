/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { static as expose } from 'express';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/helpers/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter()); // intercepts all exceptions and returns a consistent response
  app.use(expose('public'));
  const configService = app.get(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Ignorar datos que no esten en los DTO
      forbidNonWhitelisted: true, // Lanzar error si existen datos prohibidos
      disableErrorMessages: false, // Desabilitar mensajes de error (producción)
      // transformOptions: {
      //   enableImplicitConversion: true,   // Habilitar conversion implicita
      // },
    }),
  );

  const config = new DocumentBuilder()
    //.addBearerAuth()
    .setTitle('API DOCUMENTATION')
    .setDescription(configService.get('app.name'))
    .setVersion(configService.get('app.version'))
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(configService.get('app.docs'), app, document, {
    explorer: true,
    swaggerOptions: {
      //docExpansion: 'none',
      filter: true,
      showRequestDuration: true,
    },
  });
  app.enableCors();
  await app.listen(configService.get('app.port'));
  console.log('PORT: ' + configService.get('app.port'));
  console.log('APP_ENVIRONMENT: ' + process.env.NODE_ENV);
}
bootstrap();