import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  role: string;
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const role = this.reflector.get<string>('role', context.getHandler());
    console.log('role', role);
    console.log('user', req.user);

    //if (req.user.role === this.role) return true;
    return true;
  }
}
