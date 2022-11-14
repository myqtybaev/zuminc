import { MailService } from './../mail/mail.service';
import { UserService } from './../user/user.service';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    private userService: UserService,
    private mail: MailService,
  ) {}

  async authenticating(email: string) {
    let code = this.newCode();
    await this.userService.autificating(email, code);
    await this.mail.sendMail(email, code);
    return { status: true };
  }
  newCode(): number {
    let min = Math.ceil(1000);
    let max = Math.floor(9999);
    return Math.round(Math.random() * (max - min) + min);
  }
  async authorization({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const user = await this.userService.authorization(email);
    if (user.password !== password) {
      throw new HttpException('Не верный код', HttpStatus.BAD_REQUEST);
    }
    let payload = await this.generationToken({
      _id: user.id,
      email: user.email,
      role: user.role,
    });
    return { status: true, payload, role: user.role };
  }
  async load(token: string) {
    try {
      let payload = await this.jwt.verify(token);
      let user = await this.userService.load(payload);
      if (user) return user;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
  async generationToken(dto: {
    _id: string;
    email: string;
    role: string;
  }): Promise<string> {
    const payload = await this.jwt.sign(dto);
    return payload;
  }
}
