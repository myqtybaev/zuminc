import { AuthService } from './auth.service';
import { Body, Controller, Post, Headers } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/')
  authification(@Body() { email }: { email: string }) {
    return this.authService.authenticating(email);
  }
  @Post('/authorization')
  authorization(@Body() dto: { email: string; password: string }) {
    return this.authService.authorization(dto);
  }
  @Post('/load')
  load(@Headers('access-token') token: string) {
    return this.authService.load(token);
  }
}
