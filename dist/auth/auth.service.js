"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const mail_service_1 = require("./../mail/mail.service");
const user_service_1 = require("./../user/user.service");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(jwt, userService, mail) {
        this.jwt = jwt;
        this.userService = userService;
        this.mail = mail;
    }
    async authenticating(email) {
        let code = this.newCode();
        await this.userService.autificating(email, code);
        await this.mail.sendMail(email, code);
        return { status: true };
    }
    newCode() {
        let min = Math.ceil(1000);
        let max = Math.floor(9999);
        return Math.round(Math.random() * (max - min) + min);
    }
    async authorization({ email, password, }) {
        const user = await this.userService.authorization(email);
        if (user.password !== password) {
            throw new common_1.HttpException('Не верный код', common_1.HttpStatus.BAD_REQUEST);
        }
        let payload = await this.generationToken({
            _id: user.id,
            email: user.email,
            role: user.role,
        });
        return { status: true, payload, role: user.role };
    }
    async load(token) {
        try {
            let payload = await this.jwt.verify(token);
            let user = await this.userService.load(payload);
            if (user)
                return user;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async generationToken(dto) {
        const payload = await this.jwt.sign(dto);
        return payload;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_service_1.UserService,
        mail_service_1.MailService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map