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
exports.ProductService = exports.CategoryService = exports.AttributeService = void 0;
const product_model_1 = require("./product.model");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AttributeService = class AttributeService {
    constructor(attributeModel) {
        this.attributeModel = attributeModel;
    }
    async findAllAttribute() {
        return await this.attributeModel.find();
    }
    async findOneAttribute(id) {
        return await this.attributeModel.findById(id);
    }
    async findByIdsAttributes(ids) {
        return await this.attributeModel.find({ _id: { $in: ids } });
    }
    async createAttribute(dto) {
        const candidateLabel = await this.attributeModel.findOne({
            label: dto.label,
        });
        if (candidateLabel) {
            throw new common_1.HttpException('Ярлык занято', common_1.HttpStatus.BAD_REQUEST);
        }
        const candidateValue = await this.attributeModel.findOne({
            value: dto.value,
        });
        if (candidateValue) {
            throw new common_1.HttpException('Название занято', common_1.HttpStatus.BAD_REQUEST);
        }
        const attribute = new this.attributeModel(dto);
        await attribute.save();
        return { message: 'Атрибут создан', type: 'success' };
    }
    async updateAttribute(dto, id) {
        const candidateLabel = await this.attributeModel.findOne({
            label: dto.label,
        });
        if (candidateLabel && id !== candidateLabel.id) {
            throw new common_1.HttpException('Ярлык занято', common_1.HttpStatus.BAD_REQUEST);
        }
        const candidateValue = await this.attributeModel.findOne({
            value: dto.value,
        });
        if (candidateValue && id !== candidateValue.id) {
            throw new common_1.HttpException('Название занято', common_1.HttpStatus.BAD_REQUEST);
        }
        const attribute = await this.attributeModel.findByIdAndUpdate(id, dto);
        return { message: 'Атрибут изменен', type: 'success' };
    }
    async destroyAttribute(id) {
        const attribute = await this.attributeModel.findByIdAndDelete(id);
        return { message: 'Атрибут изменен', type: 'success' };
    }
};
AttributeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_model_1.Attribute.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AttributeService);
exports.AttributeService = AttributeService;
let CategoryService = class CategoryService {
    constructor(categoryModel, attributeModel) {
        this.categoryModel = categoryModel;
        this.attributeModel = attributeModel;
    }
    async findAllCategory() {
        return await this.categoryModel.find();
    }
    async findOneCategory(id) {
        return await this.categoryModel.findById(id);
    }
    async createCategory(dto) {
        const candidateLabel = await this.categoryModel.findOne({
            label: dto.label,
        });
        if (candidateLabel) {
            throw new common_1.HttpException('Ярлык занято', common_1.HttpStatus.BAD_REQUEST);
        }
        const candidateValue = await this.categoryModel.findOne({
            value: dto.value,
        });
        if (candidateValue) {
            throw new common_1.HttpException('Название занято', common_1.HttpStatus.BAD_REQUEST);
        }
        const category = new this.categoryModel(Object.assign({}, dto));
        console.log(dto);
        await category.save();
        return { message: 'Категория товаров создан', type: 'success' };
    }
    async updateCategory(dto, id) {
        const candidateLabel = await this.categoryModel.findOne({
            label: dto.label,
        });
        if (candidateLabel && candidateLabel.id !== id) {
            throw new common_1.HttpException('Ярлык занято', common_1.HttpStatus.BAD_REQUEST);
        }
        const candidateValue = await this.categoryModel.findOne({
            value: dto.value,
        });
        if (candidateValue && candidateValue.id !== id) {
            throw new common_1.HttpException('Название занято', common_1.HttpStatus.BAD_REQUEST);
        }
        console.log(dto);
        await this.categoryModel.findByIdAndUpdate(id, Object.assign({}, dto));
        return { message: 'Атрибут изменен', type: 'success' };
    }
    async destroyCategory(id) {
        await this.categoryModel.findByIdAndDelete(id);
        return { message: 'Атрибут изменен', type: 'success' };
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_model_1.Category.name)),
    __param(1, (0, mongoose_1.InjectModel)(product_model_1.Attribute.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], CategoryService);
exports.CategoryService = CategoryService;
let ProductService = class ProductService {
    constructor(categoryModel, attributeModel, productModel) {
        this.categoryModel = categoryModel;
        this.attributeModel = attributeModel;
        this.productModel = productModel;
    }
    async findAllProduct() {
        return await this.productModel.find();
    }
    async findParam(param) {
        return await this.productModel.find().sort({ _id: -1 }).limit(18);
    }
    async findCountProduct(query) {
        let obj = {};
        if (query.category) {
            const { id } = await this.categoryModel.findOne({
                label: query.category,
            });
            query.category = id;
        }
        return {
            product: await this.productModel
                .find(Object.assign(Object.assign({}, query), obj))
                .skip(((query === null || query === void 0 ? void 0 : query.count) || 0) * 30)
                .limit(30),
            count: await this.productModel.find(Object.assign(Object.assign({}, query), obj)).count(),
        };
    }
    async findOneProduct(id) {
        const product = await this.productModel.findById(id);
        const category = await this.categoryModel.findById(product.category);
        const proda = product;
        proda.category = category;
        return product;
    }
    async createProduct(dto) {
        const candidate = await this.productModel.findOne({ title: dto.title });
        if (candidate) {
            throw new common_1.HttpException('Название занято', common_1.HttpStatus.BAD_REQUEST);
        }
        const category = new this.productModel(dto);
        await category.save();
        return { message: 'Nоваров создан', type: 'success' };
    }
    async updateProduct(dto, id) {
        const candidate = await this.productModel.findOne({ title: dto.title });
        if (candidate && candidate.id !== id) {
            throw new common_1.HttpException('Название занято', common_1.HttpStatus.BAD_REQUEST);
        }
        await this.productModel.findByIdAndUpdate(id, dto);
        return { message: 'Атрибут изменен', type: 'success' };
    }
    async destroyProduct(id) {
        const product = await this.productModel.findByIdAndDelete(id);
        return { message: 'Удален', type: 'success' };
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_model_1.Category.name)),
    __param(1, (0, mongoose_1.InjectModel)(product_model_1.Attribute.name)),
    __param(2, (0, mongoose_1.InjectModel)(product_model_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map