/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private service;
    constructor(service: OrderService);
    create(dto: OrderDto, req: Request): Promise<{
        message: string;
    }>;
    edit(id: string, dto: {
        type: string;
        text: string;
    }): Promise<{
        message: string;
    }>;
    findById(id: string): Promise<import("./order.shema").Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findUser(req: Request): Promise<(import("./order.shema").Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findAll(count: number): Promise<{
        data: (import("./order.shema").Order & import("mongoose").Document<any, any, any> & {
            _id: any;
        })[];
        total: number;
    }>;
}
