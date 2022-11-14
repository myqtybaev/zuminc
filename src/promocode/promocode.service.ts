import { PromocodeDto } from './dto/promocode.dto';
import { Promocode, PromocodeDocument } from './promocode.shema';
import { Model } from 'mongoose';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PromocodeService {
  constructor(
    @InjectModel(Promocode.name) private promocode: Model<PromocodeDocument>,
  ) {}

  async create(dto: PromocodeDto) {
    // Создать промокод

    //проверка на уникальность
    const candidate = await this.promocode.findOne({
      promocode: dto.promocode,
    });
    if (candidate) {
      throw new HttpException('Данный промокод занят', HttpStatus.BAD_REQUEST);
    }
    //создание
    const promocode = new this.promocode(dto);
    //сахранение
    await promocode.save();
    return { message: 'success' };
  }

  async findAll(count: number = 0) {
    // Получение всех промокодов
    const promocodes = await this.promocode
      .find()
      .skip(count * 30)
      .limit(30);
    const coun = await this.promocode.find().count();
    return { data: promocodes, count: coun };
  }

  async findById(id: string) {
    // Пойск по id
    const promocode = await this.promocode.findById(id);

    return promocode;
  }

  async findPromocode(name: string) {
    // Проверка промокода
    const promocode = await this.promocode.findOne({ promocode: name });
    if (promocode) return promocode;
    throw new HttpException(
      'Данный промокод отсутствует',
      HttpStatus.BAD_REQUEST,
    );
  }

  async update(dto: PromocodeDto, id: string) {
    // Редактирование промокода

    //Проверка на уникальноть
    const candidate = await this.promocode.findOne({
      promocode: dto.promocode,
    });

    if (candidate && candidate.id !== id) {
      throw new HttpException('Данный промокод занят', HttpStatus.BAD_REQUEST);
    }
    //редактирование
    await this.promocode.findByIdAndUpdate(id, dto);
    return { message: 'success' };
  }
  async destroy(id: string) {
    // Удаление промокода
    await this.promocode.findByIdAndDelete(id);
    return { message: 'success' };
  }
}
