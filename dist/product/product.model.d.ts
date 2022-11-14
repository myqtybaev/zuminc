/// <reference types="mongoose/types/pipelinestage" />
import { Document } from 'mongoose';
export interface IAttribute {
    _id: string;
    label: string;
    value: string;
    type: string;
}
export declare type AttributeDocument = Attribute & Document;
export declare class Attribute {
    label: string;
    value: string;
    type: string;
}
export declare const AttributeSchema: import("mongoose").Schema<Attribute, import("mongoose").Model<Attribute, any, any, any>, any, any>;
export interface ICategory {
    _id: string;
    label: string;
    value: string;
    attribute: IAttribute[];
}
export declare type CategoryDocument = Category & Document;
export declare class Category {
    label: string;
    value: string;
    attribute: string[];
}
export declare const CategorySchema: import("mongoose").Schema<Category, import("mongoose").Model<Category, any, any, any>, any, any>;
export declare type ProductDocument = Product & Document;
export declare class Product {
    image: string[];
    title: string;
    prise: number;
    category: string;
    attribute: object[];
    inStock: boolean;
    discont: number;
    description: string;
}
export declare const ProductSchema: import("mongoose").Schema<Product, import("mongoose").Model<Product, any, any, any>, any, any>;
