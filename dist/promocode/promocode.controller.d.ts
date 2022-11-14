/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
import { PromocodeDto } from './dto/promocode.dto';
import { PromocodeService } from './promocode.service';
export declare class PromocodeController {
    private service;
    constructor(service: PromocodeService);
    create(dto: PromocodeDto): Promise<{
        message: string;
    }>;
    findAll(count: number): Promise<{
        data: (import("./promocode.shema").Promocode & import("mongoose").Document<any, any, any> & {
            _id: any;
        })[];
        count: number;
    }>;
    findById(id: string): Promise<import("./promocode.shema").Promocode & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findPromocode(name: string): Promise<import("./promocode.shema").Promocode & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(dto: PromocodeDto, id: string): Promise<{
        message: string;
    }>;
    destroy(id: string): Promise<{
        message: string;
    }>;
}
