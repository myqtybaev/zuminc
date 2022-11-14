import { BasketItem } from '../order.interface';
export class OrderDto {
  // Фиое
  fio: string;
  // Почта
  email: string;
  // Телефон
  phone: string;
  // Страна
  country: string;
  // Город или населенный пункт
  city: string;
  // Почтовый индекс
  postIndex: string;
  // Улица
  street: string;
  // Дом
  homeIndex: string;
  // Комментарий
  comment: string;
  // Корзина
  basket: BasketItem[];
  // Id пользователя
  userId: string;
  // Общая сумма заказа
  sum: number;
  // Промокод
  promocode: string;
  // Дата
  date: Date;
}
