import { MailerService } from '@nestjs-modules/mailer';
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendMail(email: string, code: number): Promise<void>;
    sendStatus(email: string, text: string): Promise<void>;
}
