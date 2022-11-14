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
exports.editFileName = exports.imageFileFilter = exports.ProductController = void 0;
const product_attribute_dto_1 = require("./dto/product.attribute.dto");
const product_service_1 = require("./product.service");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const uuid_1 = require("uuid");
const auth_guard_1 = require("../auth/auth.guard");
let ProductController = class ProductController {
    constructor(attributeService, categoryService, productService) {
        this.attributeService = attributeService;
        this.categoryService = categoryService;
        this.productService = productService;
    }
    findAllAttribute(req) {
        console.log(req['user']);
        return this.attributeService.findAllAttribute();
    }
    findByIdsAttribute(id) {
        return this.attributeService.findByIdsAttributes(id.split(','));
    }
    findByIdAttribute(id) {
        return this.attributeService.findOneAttribute(id);
    }
    createAttribute(dto) {
        return this.attributeService.createAttribute(dto);
    }
    updateAttribute(dto, id) {
        return this.attributeService.updateAttribute(dto, id);
    }
    destroyAttribute(id) {
        return this.attributeService.destroyAttribute(id);
    }
    findAllCategory() {
        return this.categoryService.findAllCategory();
    }
    findByIdCategory(id) {
        return this.categoryService.findOneCategory(id);
    }
    createCategory(dto) {
        return this.categoryService.createCategory(dto);
    }
    updateCategory(dto, id) {
        return this.categoryService.updateCategory(dto, id);
    }
    destroyCategory(id) {
        return this.categoryService.destroyCategory(id);
    }
    findAllProduct(query) {
        return this.productService.findCountProduct(query);
    }
    findByIdProduct(id) {
        return this.productService.findOneProduct(id);
    }
    getParam(param) {
        return this.productService.findParam(param);
    }
    createProduct(files, dto) {
        dto.image = files.map((item) => '/api/image/' + item.filename);
        if (typeof dto.attribute === 'string') {
            dto.attribute = JSON.parse(dto.attribute);
        }
        return this.productService.createProduct(dto);
    }
    updateProduct(files, dto, id) {
        dto.image = files.map((item) => '/api/image/' + item.filename);
        if (typeof dto.attribute === 'string') {
            dto.attribute = JSON.parse(dto.attribute);
        }
        return this.productService.updateProduct(dto, id);
    }
    destroyProduct(id) {
        return this.productService.destroyProduct(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('attribute'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findAllAttribute", null);
__decorate([
    (0, common_1.Get)('attribute/ids=:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findByIdsAttribute", null);
__decorate([
    (0, common_1.Get)('attribute/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findByIdAttribute", null);
__decorate([
    (0, common_1.Post)('attribute'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_attribute_dto_1.ProductAttributeDto]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "createAttribute", null);
__decorate([
    (0, common_1.Put)('attribute/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_attribute_dto_1.EditProductAttributeDto, String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "updateAttribute", null);
__decorate([
    (0, common_1.Delete)('attribute/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "destroyAttribute", null);
__decorate([
    (0, common_1.Get)('category'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findAllCategory", null);
__decorate([
    (0, common_1.Get)('category/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findByIdCategory", null);
__decorate([
    (0, common_1.Post)('category'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_attribute_dto_1.ProductCategoryDto]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "createCategory", null);
__decorate([
    (0, common_1.Put)('category/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_attribute_dto_1.EditProductCategoryDto, String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "updateCategory", null);
__decorate([
    (0, common_1.Delete)('category/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "destroyCategory", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findAllProduct", null);
__decorate([
    (0, common_1.Get)('/id=:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findByIdProduct", null);
__decorate([
    (0, common_1.Get)('/param=:param'),
    __param(0, (0, common_1.Param)('param')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getParam", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 10, {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                console.log(file.originalname);
                cb(null, (0, uuid_1.v4)() + (0, path_1.extname)(file.originalname));
            },
        }),
        fileFilter: exports.imageFileFilter,
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, product_attribute_dto_1.ProductDto]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Put)('/id=:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 10, {
        storage: (0, multer_1.diskStorage)({
            destination: '../uploads',
            filename: (req, file, cb) => {
                cb(null, (0, uuid_1.v4)() + (0, path_1.extname)(file.originalname));
            },
        }),
        fileFilter: exports.imageFileFilter,
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, product_attribute_dto_1.ProductDto, String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "destroyProduct", null);
ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.AttributeService,
        product_service_1.CategoryService,
        product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new common_1.HttpException('Only image files are allowed!', common_1.HttpStatus.BAD_REQUEST), false);
    }
    callback(null, true);
};
exports.imageFileFilter = imageFileFilter;
const editFileName = (req, file, callback) => {
    const name = file.originalname.split('.');
    const fileExtName = (0, path_1.extname)(file.originalname);
    callback(null, `${Date.now()}${name[1]}`);
};
exports.editFileName = editFileName;
//# sourceMappingURL=product.controller.js.map