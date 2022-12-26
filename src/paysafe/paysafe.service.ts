import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { catchError, firstValueFrom, map } from 'rxjs';
import { CreditPaysafeDto } from './dto/credit-paysafe.dto';
import { DebitPaysafeDto } from './dto/debit-paysafe.dto';

@Injectable()
export class PaysafeService {
  constructor(private readonly httpService: HttpService) { }

  async debit(payload: DebitPaysafeDto, ip) {
    const timestamp = Date.now();
    const data = await firstValueFrom(
      this.httpService
        .post(
          `${process.env.PAYSAFE_URL}/directdebit/v1/accounts/${process.env.PAYSAFE_DEBIT_ACCOUNT_ID}/purchases`,
          {
            merchantRefNum: `merchanttest_${timestamp}`,
            amount: payload.amount,
            customerIp: ip,
            eft: {
              paymentToken: payload.paymentToken,
              payMethod: 'WEB',
            },
          },
          {
            auth: {
              username: process.env.PAYSAFE_USERNAME,
              password: process.env.PAYSAFE_PASSWORD,
            },
          },
        )
        .pipe(
          map((response: AxiosResponse) => {
            return response.data;
          }),
          catchError((error) => {
            const { response } = error as AxiosError;
            throw new HttpException(
              {
                error: response?.data || 'Internal Server Error',
                message: 'Error in request to Paysafe API',
              },
              response.status || HttpStatus.INTERNAL_SERVER_ERROR || 500,
            );
          }),
        ),
    );
    return data;
  }

  async credit(payload: CreditPaysafeDto) {
    const timestamp = Date.now();
    const data = await firstValueFrom(
      this.httpService
        .post(
          `${process.env.PAYSAFE_URL}/cardpayments/v1/accounts/${process.env.PAYSAFE_CREDIT_ACCOUNT_ID}/auths`,
          {
            merchantRefNum: `merchanttest_${timestamp}`,
            amount: payload.amount,
            settleWithAuth: true,
            dupCheck: false,
            card: {
              paymentToken: payload.paymentToken,
            },
            profile: {
              firstName: payload.firstName,
              lastName: payload.lastName,
              email: payload.email,
            },
            billingDetails: {
              street: payload.street,
              city: payload.city,
              state: payload.state,
              country: payload.country,
              zip: payload.zip,
            },
          },
          {
            auth: {
              username: process.env.PAYSAFE_USERNAME,
              password: process.env.PAYSAFE_PASSWORD,
            },
          },
        )
        .pipe(
          map((response: AxiosResponse) => {
            return response.data;
          }),
          catchError((error) => {
            const { response } = error as AxiosError;
            throw new HttpException(
              {
                error: response?.data || 'Internal Server Error',
                message: 'Error in request to Paysafe API',
              },
              response.status || HttpStatus.INTERNAL_SERVER_ERROR || 500,
            );
          }),
        ),
    );
    return data;
  }
}
