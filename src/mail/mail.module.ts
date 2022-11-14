import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
@Module({
  imports: [
    MailerModule.forRoot({
      // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
      // or
      transport: {
        host: 'mail.netangels.ru',
        port: 587,
        secure: false,
        auth: {
          user: 'code@zuminc.kz',
          pass: '4NYWqk11pJaIuvQE',
        },
      },
      defaults: {
        from: 'Код потверждения <code@zuminc.kz>',
      },
    }),
    ConfigModule.forRoot(),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
