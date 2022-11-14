export interface IOrder {
  nomer: number;
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
  // Скидка
  discont: number;
  // Итог
  result: string;
  // Дата
  date: Date;
  // Трекер
  trackId: string;
}

export interface BasketItem {
  _id: string; // id Товара
  title: string; // Название товара
  img: string; // Картинка товара
  prise: number; // Цена товара
  que: number; // Количество товара
}
