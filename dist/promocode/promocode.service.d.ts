/// <reference types="mongoose/types/pipelinestage" />
import { PromocodeDto } from './dto/promocode.dto';
import { Promocode, PromocodeDocument } from './promocode.shema';
import { Model } from 'mongoose';
export declare class PromocodeService {
    private promocode;
    constructor(promocode: Model<PromocodeDocument>);
    create(dto: PromocodeDto): Promise<{
        message: string;
    }>;
    findAll(count?: number): Promise<{
        data: (Promocode & import("mongoose").Document<any, any, any> & {
            _id: any;
        })[];
        count: number;
    }>;
    findById(id: string): Promise<Promocode & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findPromocode(name: string): Promise<Promocode & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(dto: PromocodeDto, id: string): Promise<{
        message: string;
    }>;
    destroy(id: string): Promise<{
        message: string;
    }>;
}
