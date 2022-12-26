/* eslint-disable prettier/prettier */
// import { ApiProperty } from "@nestjs/swagger";
// import { IsOptional } from "class-validator";

// /* eslint-disable prettier/prettier */
// export declare type SortableParameters = Record<string, 'desc' | 'asc'>;
// export declare type FilterableParameters = Record<string, unknown>;
// export declare class CounterDto {
//     readonly filter?: FilterableParameters;
// }
// export class PaginateDto {
//     @IsOptional()
//     @ApiProperty({ required: false, type: 'string', description: 'Filter query string, see documentation for its schema' })
//     readonly filter?: FilterableParameters;

//     @IsOptional()
//     @ApiProperty({ required: false, type: 'string', description: 'Use only allowed properties separated by semicolon; default is ascending created_at; prefix name with hyphen/minus sign to get descending order', example: '-createdAt;booking_code' })
//     readonly sort?: string;

//     @IsOptional()
//     @ApiProperty({ required: false, type: 'number', description: 'Page number, default is 0', example: 0 })
//     readonly page?: number;

//     @IsOptional()
//     @ApiProperty({ required: false, type: 'number', description: 'Page size, default is 10', example: 10 })
//     readonly limit?: number;
// }

import { Transform, TransformFnParams, Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsObject, IsOptional, IsString, Min } from 'class-validator';

export type SortableParameters = Record<string, 'desc' | 'asc'>;
export type FilterableParameters = Record<string, unknown>;

export class CounterDto {
    @ApiPropertyOptional({
        type: String,
        description: 'Filter query string, see documentation for its schema',
    })
    @Transform((v: TransformFnParams) => filterQueryToObject(v.value))
    @IsObject()
    readonly filter?: FilterableParameters;
}

export class PaginateDto {
    @ApiPropertyOptional({
        type: String,
        description: 'Filter query string, see documentation for its schema',
    })
    @Transform((v: TransformFnParams) => filterQueryToObject(v.value))
    @IsOptional()
    @IsObject()
    readonly filter?: FilterableParameters;

    @ApiPropertyOptional({
        example: '-created_at;filename',
        description:
            'Use only allowed properties separated by semicolon; default is ascending created_at; prefix name with hyphen/minus sign to get descending order',
        type: String,
    })
    @IsOptional()
    @IsString()
    readonly sort?: string;

    readonly sorter?: SortableParameters;

    @Type(() => Number)
    @Min(0)
    @ApiPropertyOptional({ example: 0, description: '' })
    readonly page?: number = 0;

    @Type(() => Number)
    @Min(0)
    @ApiPropertyOptional({ example: 10, description: '' })
    readonly limit?: number = 10;
}

function filterQueryToObject(v: string): Record<string, unknown> {
    console.log('v==>', typeof v, v);
    return JSON.parse(v);
}
