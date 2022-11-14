/// <reference types="mongoose/types/pipelinestage" />
import { Document } from 'mongoose';
export declare type PromocodeDocument = Promocode & Document;
export declare class Promocode {
    promocode: string;
    discont: number;
    partner: string;
    partnerUrl: string;
}
export declare const PromocodeSchema: import("mongoose").Schema<Promocode, import("mongoose").Model<Promocode, any, any, any>, any, any>;
