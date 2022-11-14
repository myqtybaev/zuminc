/// <reference types="mongoose/types/pipelinestage" />
import { Document } from 'mongoose';
import { BasketItem } from './order.interface';
export declare type OrderDocument = Order & Document;
export declare class Order {
    nomer: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    city: string;
    postIndex: string;
    street: string;
    homeIndex: string;
    comment: string;
    basket: BasketItem[];
    userId: string;
    promocode: string;
    sum: number;
    discont: number;
    result: number;
    date: Date;
    status: string;
    trackId: string;
}
export declare const OrderSchema: import("mongoose").Schema<Order, import("mongoose").Model<Order, any, any, any>, any, any>;
