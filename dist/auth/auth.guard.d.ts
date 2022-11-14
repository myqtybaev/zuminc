import { UserService } from './../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class AuthGuard implements CanActivate {
    private jwt;
    private userService;
    constructor(jwt: JwtService, userService: UserService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
