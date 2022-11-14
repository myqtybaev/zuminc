/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    authification({ email }: {
        email: string;
    }): Promise<{
        status: boolean;
    }>;
    authorization(dto: {
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
}
