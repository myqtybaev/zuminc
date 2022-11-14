/// <reference types="mongoose/types/pipelinestage" />
import { ProductAttributeDto, ProductCategoryDto, EditProductAttributeDto, EditProductCategoryDto, ProductDto } from './dto/product.attribute.dto';
import { Attribute, AttributeDocument, Category, CategoryDocument, Product, ProductDocument } from './product.model';
import { Model } from 'mongoose';
export declare class AttributeService {
    private attributeModel;
    constructor(attributeModel: Model<AttributeDocument>);
    findAllAttribute(): Promise<(Attribute & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findOneAttribute(id: string): Promise<Attribute & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findByIdsAttributes(ids: string[]): Promise<(Attribute & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
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
}
export declare class CategoryService {
    private categoryModel;
    private attributeModel;
    constructor(categoryModel: Model<CategoryDocument>, attributeModel: Model<AttributeDocument>);
    findAllCategory(): Promise<(Category & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findOneCategory(id: string): Promise<Category & import("mongoose").Document<any, any, any> & {
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
}
export declare class ProductService {
    private categoryModel;
    private attributeModel;
    private productModel;
    constructor(categoryModel: Model<CategoryDocument>, attributeModel: Model<AttributeDocument>, productModel: Model<ProductDocument>);
    findAllProduct(): Promise<(Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findParam(param: string): Promise<(Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findCountProduct(query: any): Promise<{
        product: (Product & import("mongoose").Document<any, any, any> & {
            _id: any;
        })[];
        count: number;
    }>;
    findOneProduct(id: string): Promise<Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    createProduct(dto: ProductDto): Promise<{
        message: string;
        type: string;
    }>;
    updateProduct(dto: ProductDto, id: string): Promise<{
        message: string;
        type: string;
    }>;
    destroyProduct(id: string): Promise<{
        message: string;
        type: string;
    }>;
}
