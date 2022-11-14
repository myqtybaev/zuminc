import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop({ default: 'Пользователь' })
  role: string;

  // Личные данные
  @Prop() // Имя
  firstName: string;
  @Prop() // Фамилия
  lastName: string;
  @Prop() // Пол
  gender: string;
  @Prop() // День рождения
  birdDay: string;

  // Адресс
  @Prop() // Страна
  country: string;
  @Prop() // Город
  city: string;
  @Prop() // Почтовый индекс
  postIndex: string;
  @Prop() // Улица
  street: string;
  @Prop() // Дом
  homeIndex: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
