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
exports.PromocodeService = void 0;
const promocode_shema_1 = require("./promocode.shema");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
let PromocodeService = class PromocodeService {
    constructor(promocode) {
        this.promocode = promocode;
    }
    async create(dto) {
        const candidate = await this.promocode.findOne({
            promocode: dto.promocode,
        });
        if (candidate) {
            throw new common_1.HttpException('Данный промокод занят', common_1.HttpStatus.BAD_REQUEST);
        }
        const promocode = new this.promocode(dto);
        await promocode.save();
        return { message: 'success' };
    }
    async findAll(count = 0) {
        const promocodes = await this.promocode
            .find()
            .skip(count * 30)
            .limit(30);
        const coun = await this.promocode.find().count();
        return { data: promocodes, count: coun };
    }
    async findById(id) {
        const promocode = await this.promocode.findById(id);
        return promocode;
    }
    async findPromocode(name) {
        const promocode = await this.promocode.findOne({ promocode: name });
        if (promocode)
            return promocode;
        throw new common_1.HttpException('Данный промокод отсутствует', common_1.HttpStatus.BAD_REQUEST);
    }
    async update(dto, id) {
        const candidate = await this.promocode.findOne({
            promocode: dto.promocode,
        });
        if (candidate && candidate.id !== id) {
            throw new common_1.HttpException('Данный промокод занят', common_1.HttpStatus.BAD_REQUEST);
        }
        await this.promocode.findByIdAndUpdate(id, dto);
        return { message: 'success' };
    }
    async destroy(id) {
        await this.promocode.findByIdAndDelete(id);
        return { message: 'success' };
    }
};
PromocodeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(promocode_shema_1.Promocode.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], PromocodeService);
exports.PromocodeService = PromocodeService;
//# sourceMappingURL=promocode.service.js.map