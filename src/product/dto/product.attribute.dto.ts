import { ICategory, IAttribute } from '../product.model';
export class ProductAttributeDto {
  value: string;
  label: string;
  type: string;
}
export class EditProductAttributeDto extends ProductAttributeDto {
  _id: string;
}

export class ProductCategoryDto {
  value: string;
  label: string;
  attribute: string[];
}
export class EditProductCategoryDto extends ProductCategoryDto {
  _id: string;
}

export class ProductDto {
  image: string[];
  title: string;
  prise: number;
  category: string;
  attribute: object[] | string;
  inStock: boolean;
  discont: number;
}
