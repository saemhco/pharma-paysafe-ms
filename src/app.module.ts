/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { appConfig } from './config/app';
import { enviroments } from './config/enviroments';
import { databaseConfig } from './config/database';
import { jwtConfig } from './config/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConnectionService } from './config/connections/mongoose-connection.service';
import { PaysafeModule } from './paysafe/paysafe.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
      load: [appConfig, databaseConfig, jwtConfig],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'staging', 'production').default('dev'),
        APP_NAME: Joi.string().required(),
        APP_VERSION: Joi.string().default('1.0.0'),
        APP_DOCS: Joi.string().required(),
        PORT: Joi.number().required(),
        MONGO_URI: Joi.string().required(),
        MONGO_DB: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRESIN: Joi.string().required(),
        API_KEY_ADMIN: Joi.string().required(),
      }),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongooseConnectionService,
    }),
    PaysafeModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }