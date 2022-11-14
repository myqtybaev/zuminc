/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
import { MailService } from './../mail/mail.service';
import { UserService } from './../user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwt;
    private userService;
    private mail;
    constructor(jwt: JwtService, userService: UserService, mail: MailService);
    authenticating(email: string): Promise<{
        status: boolean;
    }>;
    newCode(): number;
    authorization({ email, password, }: {
        email: string;
        password: string;
    }): Promise<{
        status: boolean;
        payload: string;
        role: string;
    }>;
    load(token: string): Promise<import("../user/user.shema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    generationToken(dto: {
        _id: string;
        email: string;
        role: string;
    }): Promise<string>;
}
