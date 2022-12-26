import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PaysafeService } from './paysafe.service';
import { PaysafeController } from './paysafe.controller';

@Module({
  imports: [HttpModule],
  controllers: [PaysafeController],
  providers: [PaysafeService]
})
export class PaysafeModule { }
