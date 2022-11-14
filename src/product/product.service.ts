import {
  ProductAttributeDto,
  ProductCategoryDto,
  EditProductAttributeDto,
  EditProductCategoryDto,
  ProductDto,
} from './dto/product.attribute.dto';
import {
  IAttribute,
  Attribute,
  AttributeDocument,
  Category,
  CategoryDocument,
  Product,
  ProductDocument,
} from './product.model';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as fs from 'fs';
@Injectable()
export class AttributeService {
  constructor(
    @InjectModel(Attribute.name)
    private attributeModel: Model<AttributeDocument>,
  ) {}

  async findAllAttribute() {
    //Получение всех атрибутов
    return await this.attributeModel.find();
  }
  async findOneAttribute(id: string) {
    //Пойск по id
    return await this.attributeModel.findById(id);
  }
  async findByIdsAttributes(ids: string[]) {
    return await this.attributeModel.find({ _id: { $in: ids } });
  }
  async createAttribute(dto: ProductAttributeDto) {
    //Создание атрибута

    //Проверка ярлыка
    const candidateLabel = await this.attributeModel.findOne({
      label: dto.label,
    });
    if (candidateLabel) {
      throw new HttpException('Ярлык занято', HttpStatus.BAD_REQUEST);
    }

    //Проверка название
    const candidateValue = await this.attributeModel.findOne({
      value: dto.value,
    });
    if (candidateValue) {
      throw new HttpException('Название занято', HttpStatus.BAD_REQUEST);
    }

    //Создание атрибута
    const attribute = new this.attributeModel(dto);
    await attribute.save();
    return { message: 'Атрибут создан', type: 'success' };
  }
  async updateAttribute(dto: EditProductAttributeDto, id: string) {
    //Проверка ярлыка
    const candidateLabel = await this.attributeModel.findOne({
      label: dto.label,
    });
    if (candidateLabel && id !== candidateLabel.id) {
      throw new HttpException('Ярлык занято', HttpStatus.BAD_REQUEST);
    }

    //Проверка название
    const candidateValue = await this.attributeModel.findOne({
      value: dto.value,
    });
    if (candidateValue && id !== candidateValue.id) {
      throw new HttpException('Название занято', HttpStatus.BAD_REQUEST);
    }
    //Редактирование атрибута
    const attribute = await this.attributeModel.findByIdAndUpdate(id, dto);

    return { message: 'Атрибут изменен', type: 'success' };
  }
  async destroyAttribute(id: string) {
    //Удаление атрибута
    const attribute = await this.attributeModel.findByIdAndDelete(id);
    return { message: 'Атрибут изменен', type: 'success' };
  }
}

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: Model<CategoryDocument>,
    @InjectModel(Attribute.name)
    private attributeModel: Model<AttributeDocument>,
  ) {}

  async findAllCategory() {
    //Получение всех атрибутов
    return await this.categoryModel.find();
  }
  async findOneCategory(id: string) {
    //Пойск по id
    return await this.categoryModel.findById(id);
  }
  async createCategory(dto: ProductCategoryDto) {
    //Создание атрибута

    //Проверка ярлыка
    const candidateLabel = await this.categoryModel.findOne({
      label: dto.label,
    });
    if (candidateLabel) {
      throw new HttpException('Ярлык занято', HttpStatus.BAD_REQUEST);
    }

    //Проверка название
    const candidateValue = await this.categoryModel.findOne({
      value: dto.value,
    });
    if (candidateValue) {
      throw new HttpException('Название занято', HttpStatus.BAD_REQUEST);
    }

    //Создание атрибута
    const category = new this.categoryModel({ ...dto });
    console.log(dto);

    await category.save();
    return { message: 'Категория товаров создан', type: 'success' };
  }
  async updateCategory(dto: EditProductCategoryDto, id: string) {
    //Проверка ярлыка
    const candidateLabel = await this.categoryModel.findOne({
      label: dto.label,
    });
    if (candidateLabel && candidateLabel.id !== id) {
      throw new HttpException('Ярлык занято', HttpStatus.BAD_REQUEST);
    }
    //Проверка название
    const candidateValue = await this.categoryModel.findOne({
      value: dto.value,
    });
    if (candidateValue && candidateValue.id !== id) {
      throw new HttpException('Название занято', HttpStatus.BAD_REQUEST);
    }
    console.log(dto);
    //сахранение изменений
    await this.categoryModel.findByIdAndUpdate(id, {
      ...dto,
    });
    return { message: 'Атрибут изменен', type: 'success' };
  }
  async destroyCategory(id: string) {
    //Удаление атрибута
    await this.categoryModel.findByIdAndDelete(id);
    return { message: 'Атрибут изменен', type: 'success' };
  }
}

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: Model<CategoryDocument>,
    @InjectModel(Attribute.name)
    private attributeModel: Model<AttributeDocument>,
    @InjectModel(Product.name)
    private productModel: Model<ProductDocument>,
  ) {}

  async findAllProduct() {
    //Получение всех атрибутов

    return await this.productModel.find();
  }
  async findParam(param: string) {
    return await this.productModel.find().sort({ _id: -1 }).limit(18);
  }
  async findCountProduct(query: any) {
    //получение товаров
    let obj = {};

    if (query.category) {
      const { id } = await this.categoryModel.findOne({
        label: query.category,
      });
      query.category = id;
    }
    return {
      product: await this.productModel
        .find({ ...query, ...obj })
        .skip((query?.count || 0) * 30)
        .limit(30),
      count: await this.productModel.find({ ...query, ...obj }).count(),
    };
  }
  async findOneProduct(id: string) {
    //Пойск по id
    const product = await this.productModel.findById(id);
    const category = await this.categoryModel.findById(product.category);

    const proda: any = product;
    proda.category = category;
    return product;
  }
  async createProduct(dto: ProductDto) {
    //Создание товара
    //Проверка названия
    const candidate = await this.productModel.findOne({ title: dto.title });
    if (candidate) {
      throw new HttpException('Название занято', HttpStatus.BAD_REQUEST);
    }

    //Создание товара
    const category = new this.productModel(dto);
    await category.save();
    return { message: 'Nоваров создан', type: 'success' };
  }
  async updateProduct(dto: ProductDto, id: string) {
    //Проверка на уникальность
    const candidate = await this.productModel.findOne({ title: dto.title });
    if (candidate && candidate.id !== id) {
      throw new HttpException('Название занято', HttpStatus.BAD_REQUEST);
    }

    //сахранение изменений
    await this.productModel.findByIdAndUpdate(id, dto);
    return { message: 'Атрибут изменен', type: 'success' };
  }
  async destroyProduct(id: string) {
    //Удаление атрибута
    const product = await this.productModel.findByIdAndDelete(id);
    return { message: 'Удален', type: 'success' };
  }
}
