import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export interface IAttribute {
  _id: string;
  label: string;
  value: string;
  type: string;
}

export type AttributeDocument = Attribute & Document;

@Schema()
export class Attribute {
  @Prop({ required: true, unique: true })
  label: string; //Ярдллык
  @Prop({ required: true, unique: true })
  value: string; //Найменование
  @Prop({ required: true })
  type: string; //Тип
}

export const AttributeSchema = SchemaFactory.createForClass(Attribute);

export interface ICategory {
  _id: string;
  label: string;
  value: string;
  attribute: IAttribute[];
}

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop({ required: true, unique: true })
  label: string; //Ярдллык
  @Prop({ required: true, unique: true })
  value: string; //Найменование
  @Prop({ required: true })
  attribute: string[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  image: string[]; //Картинки
  @Prop({ required: true, unique: true })
  title: string; // Название товара
  @Prop({ required: true })
  prise: number; // Цена товара
  @Prop({ required: true, type: Types.ObjectId })
  category: string; // Категория товара
  @Prop({ required: true, type: Array })
  attribute: object[]; // Атрибуты
  @Prop({ default: true })
  inStock: boolean; // В наличий
  @Prop({ default: 0 })
  discont: number; // Скидка
  @Prop()
  description: string; // Описание
}

export const ProductSchema = SchemaFactory.createForClass(Product);
