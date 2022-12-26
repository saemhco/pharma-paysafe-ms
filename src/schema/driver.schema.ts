/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DriverDocument = Driver & Document;

@Schema()
export class Driver {
    @Prop({ default: null, required: false, type: String })
    fname: string;

    @Prop({ default: null, required: false, type: String })
    lname: string;

    @Prop({ default: null, required: false, type: String })
    username: string;

    @Prop({ default: null, required: false, type: String })
    fullname: string;

    @Prop({ default: null, required: false, type: String })
    first_name: string;

    @Prop({ default: null, required: false, type: String })
    last_name: string;

    @Prop({ default: null, required: false, type: String })
    email: string;

    @Prop({ default: null, required: false, type: String })
    otp: string;
}
export const DriverSchema = SchemaFactory.createForClass(Driver);
