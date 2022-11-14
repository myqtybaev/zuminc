/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(dto: UserDto): Promise<{
        message: string;
    }>;
    findAll(count: number): Promise<(import("./user.shema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findOne(id: string): Promise<import("./user.shema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(dto: UserDto, id: string): Promise<{
        message: string;
    }>;
    destroy(id: string): Promise<{
        message: string;
    }>;
}
