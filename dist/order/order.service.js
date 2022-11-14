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
exports.OrderService = void 0;
const mail_service_1 = require("./../mail/mail.service");
const order_1 = require("./order");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let OrderService = class OrderService {
    constructor(model, mail) {
        this.model = model;
        this.mail = mail;
    }
    async create(dto, id) {
        const match = Math.round(Math.random() * 1000);
        const data = new Date();
        const order = new this.model(Object.assign(Object.assign({}, dto), { userId: id, nomer: data
                .toLocaleDateString()
                .replace(/[\s.,%]/g, '')
                .split('')
                .reverse()
                .join('')
                .toString() + match }));
        await order.save();
        return { message: 'success' };
    }
    async edit(type, text, id) {
        if (type === 'Отправлен') {
            const order = await this.model.findById(id);
            await this.model.findByIdAndUpdate(id, { status: type });
            await this.mail.sendStatus(order.email, text);
            return { message: 'жетістік' };
        }
    }
    async findAll(count) {
        const orders = await this.model
            .find()
            .sort({ _id: -1 })
            .skip(count * 30)
            .limit(30);
        const total = await this.model.find().count();
        return { data: orders, total };
    }
    async findUser(id) {
        const orders = await this.model.find({ userId: id });
        return orders;
    }
    async findById(id) {
        const order = await this.model.findById(id);
        return order;
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_1.Order.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mail_service_1.MailService])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map