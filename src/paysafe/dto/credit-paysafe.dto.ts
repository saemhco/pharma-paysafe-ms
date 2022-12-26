/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreditPaysafeDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'SAnlarRLV2SfC1tG', description: 'Payment token', required: true })
    paymentToken: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 5000, description: 'Amount', required: true })
    amount: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'Joe', description: 'First name', required: true })
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'Smith', description: 'Last name', required: true })
    lastName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'joe.smit@canada.com', description: 'Email', required: true })
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '100 Queen Street West', description: 'Street', required: true })
    street: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'Toronto', description: 'City', required: true })
    city: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'ON', description: 'State', required: true })
    state: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'CA', description: 'Country', required: true })
    country: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'M5H 2N2', description: 'Zip', required: true })
    zip: string;
}
