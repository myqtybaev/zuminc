export interface IOrder {
    nomer: number;
    fio: string;
    email: string;
    phone: string;
    country: string;
    city: string;
    postIndex: string;
    street: string;
    homeIndex: string;
    comment: string;
    basket: BasketItem[];
    userId: string;
    sum: number;
    promocode: string;
    discont: number;
    result: string;
    date: Date;
    trackId: string;
}
export interface BasketItem {
    _id: string;
    title: string;
    img: string;
    prise: number;
    que: number;
}
