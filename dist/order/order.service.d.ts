/// <reference types="mongoose/types/pipelinestage" />
import { MailService } from './../mail/mail.service';
import { OrderDto } from './dto/order.dto';
import { OrderDocument } from './order.shema';
import { Model } from 'mongoose';
export declare class OrderService {
    private model;
    private mail;
    constructor(model: Model<OrderDocument>, mail: MailService);
    create(dto: OrderDto, id: string): Promise<{
        message: string;
    }>;
    edit(type: string, text: string, id: string): Promise<{
        message: string;
    }>;
    findAll(count: number): Promise<{
        data: (import("./order.shema").Order & import("mongoose").Document<any, any, any> & {
            _id: any;
        })[];
        total: number;
    }>;
    findUser(id: string): Promise<(import("./order.shema").Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findById(id: string): Promise<import("./order.shema").Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
