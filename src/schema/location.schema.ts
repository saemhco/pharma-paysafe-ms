/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now, SchemaTypes, Types } from 'mongoose';
import { Driver } from './driver.schema';

export type LocationDocument = Location & Document;

@Schema()
export class Location {

    @Prop({ default: null, required: false, type: Number })
    latitude: number;

    @Prop({ default: null, required: false, type: Number })
    longitude: number;

    @Prop({ type: SchemaTypes.ObjectId, ref: Driver.name, required: false, default: null })
    driver_id: Types.ObjectId;

    @Prop({ default: null, required: false, type: [String] })
    jobs: string[];

    @Prop({ default: null, required: false, type: String })
    pharmacy_id: string;

    @Prop({ default: now(), required: false, type: Date })
    createdAt: Date;
}
export const LocationSchema = SchemaFactory.createForClass(Location);
