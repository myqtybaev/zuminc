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
exports.PromocodeController = void 0;
const promocode_dto_1 = require("./dto/promocode.dto");
const promocode_service_1 = require("./promocode.service");
const common_1 = require("@nestjs/common");
let PromocodeController = class PromocodeController {
    constructor(service) {
        this.service = service;
    }
    create(dto) {
        return this.service.create(dto);
    }
    findAll(count) {
        return this.service.findAll(count);
    }
    findById(id) {
        return this.service.findById(id);
    }
    findPromocode(name) {
        return this.service.findPromocode(name);
    }
    update(dto, id) {
        return this.service.update(dto, id);
    }
    destroy(id) {
        return this.service.destroy(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [promocode_dto_1.PromocodeDto]),
    __metadata("design:returntype", void 0)
], PromocodeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('count')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PromocodeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/id=:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PromocodeController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)('/name=:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PromocodeController.prototype, "findPromocode", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [promocode_dto_1.PromocodeDto, String]),
    __metadata("design:returntype", void 0)
], PromocodeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PromocodeController.prototype, "destroy", null);
PromocodeController = __decorate([
    (0, common_1.Controller)('promocode'),
    __metadata("design:paramtypes", [promocode_service_1.PromocodeService])
], PromocodeController);
exports.PromocodeController = PromocodeController;
//# sourceMappingURL=promocode.controller.js.map