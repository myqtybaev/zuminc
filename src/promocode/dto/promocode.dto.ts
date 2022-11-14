export class PromocodeDto {
  promocode: string; //Промокод
  discont: number; // скидка
  partner: string; //Портнер
  partnerUrl: string; //Ссылка на партнера
}

export interface IPoromocode {
  _id: string; //id
  promocode: string; //Промокод
  discont: number; // скидка
  partner: string; //Портнер
  partnerUrl: string; //Ссылка на партнера
}
