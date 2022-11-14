"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromocodeModule = void 0;
const promocode_shema_1 = require("./promocode.shema");
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const promocode_service_1 = require("./promocode.service");
const promocode_controller_1 = require("./promocode.controller");
let PromocodeModule = class PromocodeModule {
};
PromocodeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: promocode_shema_1.Promocode.name, schema: promocode_shema_1.PromocodeSchema },
            ]),
        ],
        providers: [promocode_service_1.PromocodeService],
        controllers: [promocode_controller_1.PromocodeController],
    })
], PromocodeModule);
exports.PromocodeModule = PromocodeModule;
//# sourceMappingURL=promocode.module.js.map