/// <reference types="mongoose/types/pipelinestage" />
import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    email: string;
    password: string;
    role: string;
    firstName: string;
    lastName: string;
    gender: string;
    birdDay: string;
    country: string;
    city: string;
    postIndex: string;
    street: string;
    homeIndex: string;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any>, any, any>;
