export declare class ProductAttributeDto {
    value: string;
    label: string;
    type: string;
}
export declare class EditProductAttributeDto extends ProductAttributeDto {
    _id: string;
}
export declare class ProductCategoryDto {
    value: string;
    label: string;
    attribute: string[];
}
export declare class EditProductCategoryDto extends ProductCategoryDto {
    _id: string;
}
export declare class ProductDto {
    image: string[];
    title: string;
    prise: number;
    category: string;
    attribute: object[] | string;
    inStock: boolean;
    discont: number;
}
