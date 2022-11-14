import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BasketItem } from './order.interface';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  nomer: number; //Номер заказа
  @Prop() // Имя
  firstName: string;
  @Prop() // Фамилия
  lastName: string;
  @Prop() // Почта
  email: string;
  @Prop() // Телефон
  phone: string;
  @Prop() // Страна
  country: string;
  @Prop() // Город или населенный пункт
  city: string;
  @Prop() // Почтовый индекс
  postIndex: string;
  @Prop() // Улица
  street: string;
  @Prop() // Дом
  homeIndex: string;
  @Prop() // Комментарий
  comment: string;
  @Prop({ type: Array }) // Корзина
  basket: BasketItem[];
  @Prop() // Id пользователя
  userId: string;
  @Prop() // Промокод
  promocode: string;
  @Prop() // Общая сумма заказа
  sum: number;
  @Prop({ default: 0 }) // Скидка
  discont: number;
  @Prop() // Итог
  result: number;
  @Prop() // Дата
  date: Date;
  @Prop({ default: 'Собираем посылку' }) // Статус
  status: string;
  @Prop() // Трекер
  trackId: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
