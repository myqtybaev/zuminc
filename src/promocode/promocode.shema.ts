import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PromocodeDocument = Promocode & Document;

@Schema()
export class Promocode {
  @Prop({ unique: true, required: true })
  promocode: string; //Промокод
  @Prop({ required: true })
  discont: number; // скидка
  @Prop() //Портнер
  partner: string;
  @Prop() //Ссылка на партнера
  partnerUrl: string;
}

export const PromocodeSchema = SchemaFactory.createForClass(Promocode);
