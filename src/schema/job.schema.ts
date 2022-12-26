/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now, SchemaTypes, Types } from 'mongoose';
import { Driver } from './driver.schema';

export type JobDocument = Job & Document;

@Schema()
export class Job {

    @Prop({ type: SchemaTypes.ObjectId, ref: Driver.name, required: false, default: null })
    driver_id: Types.ObjectId;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'users', required: false, default: null })
    user_id: Types.ObjectId;

    @Prop({ default: null, required: false, type: String })
    booking_code: string;

    @Prop({ default: null, required: false, type: String })
    pick_up_location: string;

    @Prop({ default: null, required: false, type: String })
    drop_off_location: string;

    @Prop({ default: null, required: false, type: [Number] })
    pickup_lat_long: [number];

    @Prop({ default: null, required: false, type: [Number] })
    dropoff_lat_long: [number];

    @Prop({ default: null, required: false, type: [Number] })
    transfer_driver_lat_long: [number];

    @Prop({ default: null, required: false, type: String })
    transfer_driver_location: string;

    @Prop({ default: null, required: false, type: String })
    note: string;

    @Prop({ default: null, required: false, type: String })
    commentForNotDelivered: string;

    @Prop({ default: null, required: false, type: String })
    reasonForNotDelivered: string;

    @Prop({ default: null, required: false, type: [] })
    imageForNotDelivered: [any];

    @Prop({ default: null, required: false, type: String })
    customer_name: string;

    @Prop({ default: null, required: false, type: String })
    customer_f_name: string;

    @Prop({ default: null, required: false, type: String })
    customer_l_name: string;

    @Prop({ default: null, required: false, type: String })
    establishment_name: string;

    @Prop({ default: null, required: false, type: String })
    customer_phone: string;

    @Prop({ default: null, required: false, type: String })
    customer_country_code: string;

    @Prop({ default: null, required: false, type: String })
    customer_email: string;

    @Prop({ default: null, required: false, type: String })
    customer_address: string;

    @Prop({ default: null, required: false, type: String })
    customer_appartment: string;

    @Prop({ default: null, required: false, type: String })
    customer_door_code: string;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'customers', required: false, default: null })
    customer_id: Types.ObjectId;

    @Prop({ default: null, required: false, type: String })
    delivery_type: string;

    @Prop({ default: null, required: false, type: String })
    estimate_distance: string;

    @Prop({ default: null, required: false, type: String })
    customer_type: string;

    @Prop({ default: null, required: false, type: String })
    job_status: string;

    @Prop({ default: null, required: false, type: Boolean })
    isExpired: boolean;

    @Prop({ default: null, required: false, type: Boolean })
    pickedUp: boolean;

    @Prop({ default: null, required: false, type: Boolean })
    startDropup: boolean;

    @Prop({ default: null, required: false, type: Boolean })
    isAccepted: boolean;

    @Prop({ default: null, required: false, type: [] })
    transferDriver_id: [any];

    @Prop({ type: SchemaTypes.ObjectId, ref: 'drivers', required: false, default: null })
    decline_transfer_job_driver_id: Types.ObjectId;

    @Prop({ default: null, required: false, type: String })
    pick_up_note: string;

    @Prop({ default: null, required: false, type: String })
    dropoff_note: string;

    @Prop({ default: null, required: false, type: [] })
    pickup_images: [any];

    @Prop({ default: null, required: false, type: [] })
    dropoff_images: [any];

    @Prop({ default: 0, required: false, type: Number })
    ride_fare: number;

    @Prop({ default: 0, required: false, type: Number })
    ride_fare_without_tax: number;

    @Prop({ default: 0, required: false, type: Number })
    job_amount: number;

    @Prop({ default: 0, required: false, type: Number })
    collected_amount: number;

    @Prop({ default: "", required: false, type: String })
    collected_amount_note: string;

    @Prop({ default: 0, required: false, type: Number })
    night_charge: number;

    @Prop({ default: 0, required: false, type: Number })
    weekend_charge: number;

    @Prop({ default: 0, required: false, type: Number })
    taxes: number;

    @Prop({ default: 0, required: false, type: Number })
    tax: number;

    @Prop({ default: 0, required: false, type: Number })
    gst: number;

    @Prop({ default: 0, required: false, type: Number })
    qst: number;

    @Prop({ default: 0, required: false, type: Number })
    processingFee: number;

    @Prop({ default: 0, required: false, type: Number })
    stripeFee: number;

    @Prop({ default: 0, required: false, type: Number })
    item_stripe_fee: number;

    @Prop({ default: 0, required: false, type: Boolean })
    isTransferred: boolean;

    @Prop({ default: null, required: false, type: String })
    job_from: string;

    @Prop({ default: null, required: false, type: [] })
    driverArr: [any];

    @Prop({ default: null, required: false, type: Boolean })
    pharamcy_payment: boolean;

    @Prop({ default: null, required: false, type: Boolean })
    customer_payment: boolean;

    @Prop({ default: null, required: false, type: String })
    job_type: string;

    @Prop({ default: null, required: false, type: String })
    order_reciever_by: string;

    @Prop({ default: null, required: false, type: String })
    reciever_name: string;

    @Prop({ default: null, required: false, type: String })
    customer_signature: string;

    @Prop({ default: null, required: false, type: String })
    job_prescription: [any];

    @Prop({ default: null, required: false, type: String })
    jobFor: string;

    @Prop({ default: false, required: false, type: Boolean })
    isPrivate: boolean;

    @Prop({ default: null, required: false, type: String })
    job_tags: [any];

    @Prop({ default: null, required: false, type: Date })
    job_date: Date;

    @Prop({ default: 0, required: false, type: Number })
    other_fare: number;

    @Prop({ default: now() })
    createdAt: Date;

    @Prop({ default: now() })
    updatedAt: Date;

    @Prop({ default: now(), required: false, type: Date })
    jobCreatedAt: Date;

    @Prop({ default: null, required: false, type: Date })
    acceptedTime: Date;

    @Prop({ default: null, required: false, type: Date })
    transfer_time: Date;

    @Prop({ default: null, required: false, type: Date })
    cancel_by_pharmacy_time: Date;

    @Prop({ default: null, required: false, type: Date })
    expired_time: Date;

    @Prop({ default: null, required: false, type: Date })
    not_delivered_time: Date;

    @Prop({ default: null, required: false, type: Date })
    departureTime: Date;

    @Prop({ default: "", required: false, type: String })
    departureTimeStr: string;

    @Prop({ default: null, required: false, type: Date })
    deliveryTime: Date;

    @Prop({ default: "", required: false, type: String })
    deliveryTimeStr: string;

    @Prop({ default: "", required: false, type: String })
    totalServiceTime: string;

    @Prop({ default: null, required: false, type: Date })
    preprationTime: Date;

    @Prop({ default: null, required: false, type: String })
    timeZone: string;

    @Prop({ default: false, required: false, type: Boolean })
    ride_payment_failed: boolean;

    @Prop({ default: null, required: false, type: String })
    delivery_message: string;

    @Prop({ default: false, required: false, type: Boolean })
    expired_by_pharmacy: boolean;

    @Prop({ default: false, required: false, type: Boolean })
    transferEvent: boolean;

    @Prop({ default: null, required: false, type: String })
    cancel_note_driver: string;

    @Prop({ default: null, required: false, type: Boolean })
    cancel_by_driver: boolean;

    @Prop({ default: "", required: false, type: String })
    transferred_by_driver_name: string;

    @Prop({ default: "", required: false, type: String })
    transferred_by_driver_phone: string;

    @Prop({ default: null, required: false, type: Boolean })
    isRecursiveJob: boolean;

    @Prop({ default: "", required: false, type: String })
    repeatJob: any;

    @Prop({ default: "1", required: false, type: String })
    recursionType: string;

    @Prop({ default: "", required: false, type: String })
    driver_details: any;

    @Prop({ default: "", required: false, type: [] })
    stepper_status: [any];

    @Prop({ default: false, required: false, type: Boolean })
    isNotDelivered: boolean;

    @Prop({ default: "", required: false, type: [] })
    selected_drivers: [any];

    @Prop({ default: false, required: false, type: Boolean })
    jobCreatedFromCron: boolean;

    @Prop({ default: 0, required: false, type: Number })
    stateTax: number;

    @Prop({ default: 0, required: false, type: Number })
    stateProcessingFee: number;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'pharmacyTaxes', required: false })
    state_tax_id: Types.ObjectId;

    @Prop({ default: 0, required: false, type: Number })
    collected_amount_pharmacy: number;

    @Prop({ default: "", required: false, type: String })
    collection_note_pharmacy: string;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'payments', required: false })
    customer_payment_id: Types.ObjectId;

    @Prop({ default: "", required: false, type: String })
    collected_amount_initial: string;

    @Prop({ default: null, required: false, type: Date })
    collected_amount_date_pharmacy: Date;

    @Prop({ default: "", required: false, type: String })
    job_create_initials: string;

    @Prop({ default: false, required: false, type: Boolean })
    cheque_collected_from_driver: boolean;

    @Prop({ default: "", required: false, type: String })
    cheque_note: string;

    @Prop({ default: "", required: false, type: String })
    cheque_amount_initials: string;

    @Prop({ default: false, required: false, type: Boolean })
    isRecursiveJobExist: boolean;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'customers', required: false })
    establishment_id: Types.ObjectId;

    @Prop({ default: "1", required: false, type: String })
    customerTypeSelection: string;

    @Prop({ required: false, type: [] })
    multiple_customers: [any];

    @Prop({ required: false, type: [] })
    multiple_customers_info: [any];

    @Prop({ default: "0", required: false, type: String })
    establishmentTagSelection: string;

    @Prop({ default: false, required: false, type: Boolean })
    ownershipApprovedByPharmacy: boolean;

    @Prop({ default: false, required: false, type: Boolean })
    jobCreatedFromCsv: boolean;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'jobs', required: false })
    recursiveJobParentId: Types.ObjectId;

    @Prop({ required: false, type: [] })
    recursive_job_type: [any];

    @Prop({ default: null, required: false, type: Date })
    recursive_end_date: Date;

    @Prop({ default: null, required: false, type: Date })
    job_date_time: Date;

    @Prop({ required: false, type: {} })
    customer_payment_id_object: any;

    @Prop({ default: false, required: false, type: Boolean })
    recursive_notification_status: boolean;

    @Prop({ required: false, type: [] })
    recursive_notification_drivers: [any];

    @Prop({ default: false, required: false, type: Boolean })
    job_note_seen_driver: boolean;

    @Prop({ default: 0, required: false, type: Number })
    totalTagsPrices: number;

    @Prop({ type: SchemaTypes.ObjectId, required: false, default: null })
    dispatchCompanyId: Types.ObjectId;

    @Prop({ default: 'PHARMACY', required: false, type: String })
    jobCreatedBy: string;

    @Prop({ default: '', required: false, type: String })
    jobQrCodeUrl: string;

    @Prop({ required: false, type: [] })
    selectedDispatchForJob: [any];

    @Prop({ default: false, required: false, type: Boolean })
    isAcceptedByDispatch: boolean;

    @Prop({ default: 'NORMAL', required: false, type: String })
    jobAcceptedBy: string;

    @Prop({ required: false, type: {} })
    packageObj: any;

    @Prop({ type: SchemaTypes.ObjectId, required: false, default: {} })
    stateTaxObj: Types.ObjectId;

    @Prop({ default: '0', required: false, type: String })
    startTime: string;

    @Prop({ default: 'NORMAL', required: false, type: String })
    minute: string;

    @Prop({ required: false, type: {} })
    endTime: any;

    @Prop({ default: null, required: false, type: Date })
    startDateTime: Date;

    @Prop({ default: null, required: false, type: Date })
    endDateTime: Date;

    @Prop({ default: '', required: false, type: String })
    nameEn: string;

    @Prop({ default: '', required: false, type: String })
    nameFr: string;

    @Prop({ type: SchemaTypes.ObjectId, required: false, default: {}, ref: 'jobCityPrices' })
    jobCity: Types.ObjectId;

    @Prop({ default: '', required: false, type: String })
    province: string;

    @Prop({ default: '', required: false, type: {} })
    timestamps: { updatedAt: "updated_at" };

}

export const JobSchema = SchemaFactory.createForClass(Job);
