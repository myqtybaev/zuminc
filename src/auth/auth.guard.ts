import { UserService } from './../user/user.service';
import { JwtService } from '@nestjs/jwt';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwt: JwtService, private userService: UserService) {}
  async canActivate(context: ExecutionContext) {
    try {
      const req = context.switchToHttp().getRequest();
      const token = req.headers['access-token'];
      let payload = this.jwt.verify(token);
      req.user = await this.userService.payload(payload);
      return true;
    } catch (e) {
      console.log('error');
      throw new UnauthorizedException({
        message: 'Пользователь не авторизован',
      });
    }
  }
}
