import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMail(email: string, code: number) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Авторизация <code@zuminc.kz>',
      html: `
        <img src="https://zuminc.kz/image/logo.png">
        <h1>Ваш пароль для входа</h1>
        <p>вернитесь в окно браузера, в котором вы начали создавать свою зеркальную учетную запись, и введите этот код:</p>
        <span style="width: 100%; padding: 10px; background: #f3f4f8; margin-bottom: 15px; display: block;">${code}</span>
        <p>Если вы не создавали учетную запись пожалуйста, проигнорируйте это сообщение.</p>
      `,
    });
  }

  async sendStatus(email: string, text: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Статус покупки<code@zuminc.kz>',
      html:
        `
        <img src="https://zuminc.kz/image/logo.png">   
        ` + text,
    });
  }
}
