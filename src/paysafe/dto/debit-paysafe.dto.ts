/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class DebitPaysafeDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'SAnlarRLV2SfC1tG', description: 'Payment token' })
    paymentToken: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 5000, description: 'Amount' })
    amount: number;
}
