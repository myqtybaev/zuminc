/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
import { ProductAttributeDto, ProductCategoryDto, EditProductAttributeDto, EditProductCategoryDto, ProductDto } from './dto/product.attribute.dto';
import { CategoryService, AttributeService, ProductService } from './product.service';
export declare class ProductController {
    private attributeService;
    private categoryService;
    private productService;
    constructor(attributeService: AttributeService, categoryService: CategoryService, productService: ProductService);
    findAllAttribute(req: Request): Promise<(import("./product.model").Attribute & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findByIdsAttribute(id: string): Promise<(import("./product.model").Attribute & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findByIdAttribute(id: string): Promise<import("./product.model").Attribute & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    createAttribute(dto: ProductAttributeDto): Promise<{
        message: string;
        type: string;
    }>;
    updateAttribute(dto: EditProductAttributeDto, id: string): Promise<{
        message: string;
        type: string;
    }>;
    destroyAttribute(id: string): Promise<{
        message: string;
        type: string;
    }>;
    findAllCategory(): Promise<(import("./product.model").Category & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findByIdCategory(id: string): Promise<import("./product.model").Category & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    createCategory(dto: ProductCategoryDto): Promise<{
        message: string;
        type: string;
    }>;
    updateCategory(dto: EditProductCategoryDto, id: string): Promise<{
        message: string;
        type: string;
    }>;
    destroyCategory(id: string): Promise<{
        message: string;
        type: string;
    }>;
    findAllProduct(query: object): Promise<{
        product: (import("./product.model").Product & import("mongoose").Document<any, any, any> & {
            _id: any;
        })[];
        count: number;
    }>;
    findByIdProduct(id: string): Promise<import("./product.model").Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getParam(param: string): Promise<(import("./product.model").Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    createProduct(files: any, dto: ProductDto): Promise<{
        message: string;
        type: string;
    }>;
    updateProduct(files: any, dto: ProductDto, id: string): Promise<{
        message: string;
        type: string;
    }>;
    destroyProduct(id: string): Promise<{
        message: string;
        type: string;
    }>;
}
export declare const imageFileFilter: (req: any, file: any, callback: any) => any;
export declare const editFileName: (req: any, file: any, callback: any) => void;
