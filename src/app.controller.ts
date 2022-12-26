import { Controller, Get, Req } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @ApiExcludeEndpoint()
  getHello(@Req() req: Request): string {
    return this.appService.getHello(req);
  }
}