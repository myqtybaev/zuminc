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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const mail_service_1 = require("./../mail/mail.service");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_shema_1 = require("./user.shema");
let UserService = class UserService {
    constructor(userModel, mail) {
        this.userModel = userModel;
        this.mail = mail;
    }
    async create(body) {
        const candidate = await this.userModel.findOne({ email: body.email });
        if (candidate) {
            throw new common_1.HttpException('Данная почта занята', common_1.HttpStatus.BAD_REQUEST);
        }
        const user = new this.userModel(body);
        await user.save();
        return { message: 'success' };
    }
    async autificating(email, code) {
        const candidate = await await this.userModel.findOne({ email });
        if (candidate) {
            await this.userModel.findByIdAndUpdate(candidate.id, { password: code });
            return candidate;
        }
        const user = new this.userModel({ email, password: code });
        await user.save();
        return user;
    }
    async authorization(email) {
        const user = await this.userModel.findOne({ email: email });
        return user;
    }
    async load({ email, _id, role, }) {
        const admin = await this.userModel.find({ email: 'ewower12@gmail.com' });
        if (!admin) {
            new this.userModel({
                email: 'ewower12@gmail.com',
                password: '0000',
                role: 'admin',
            }).save();
        }
        const user = await this.userModel.findOne({ email, _id, role });
        return user;
    }
    async findAll(count) {
        const users = this.userModel
            .find()
            .skip(count * 30)
            .limit(30);
        return users;
    }
    async findOne(id) {
        const user = await this.userModel.findById(id);
        return user;
    }
    async update(body, id) {
        const candidate = await this.userModel.findOne({ email: body.email });
        if (candidate && candidate.id !== id) {
            throw new common_1.HttpException('Данная почта занята', common_1.HttpStatus.BAD_REQUEST);
        }
        await candidate.update(body);
        return { message: 'Пользователь изменен' };
    }
    async destroy(id) {
        await this.userModel.findByIdAndDelete(id);
        return { message: 'Пользователь удален' };
    }
    async payload(dto) {
        return await this.userModel.findOne(dto);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_shema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mail_service_1.MailService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map