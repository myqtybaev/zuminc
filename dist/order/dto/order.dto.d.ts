import { BasketItem } from '../order.interface';
export declare class OrderDto {
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
    date: Date;
}
