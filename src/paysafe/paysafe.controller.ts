import { Controller, Post, Body, Res, Ip } from '@nestjs/common';
import { PaysafeService } from './paysafe.service';
import { DebitPaysafeDto } from './dto/debit-paysafe.dto';
import { httpResponse } from 'src/common/helpers/http-response.helper';
import { CreditPaysafeDto } from './dto/credit-paysafe.dto';

@Controller('paysafe')
export class PaysafeController {
  constructor(private readonly paysafeService: PaysafeService) { }

  @Post('debit')
  async debit(@Body() payload: DebitPaysafeDto, @Ip() ip, @Res() res) {
    return httpResponse(res, await this.paysafeService.debit(payload, ip));
  }

  @Post('credit')
  async credit(@Body() payload: CreditPaysafeDto, @Res() res) {
    return httpResponse(res, await this.paysafeService.credit(payload));
  }
}
