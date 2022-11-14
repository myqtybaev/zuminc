/// <reference types="mongoose/types/pipelinestage" />
import { MailService } from './../mail/mail.service';
import { UserDto } from './dto/user.dto';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.shema';
export declare class UserService {
    private userModel;
    private mail;
    constructor(userModel: Model<UserDocument>, mail: MailService);
    create(body: UserDto): Promise<{
        message: string;
    }>;
    autificating(email: string, code: number): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    authorization(email: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    load({ email, _id, role, }: {
        email: string;
        _id: string;
        role: string;
    }): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(count: number): Promise<(User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findOne(id: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(body: UserDto, id: string): Promise<{
        message: string;
    }>;
    destroy(id: string): Promise<{
        message: string;
    }>;
    payload(dto: {
        email: string;
        _id: string;
        role: string;
    }): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
