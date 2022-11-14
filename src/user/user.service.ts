import { MailService } from './../mail/mail.service';
import { UserDto } from './dto/user.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.shema';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
    private mail: MailService,
  ) {}
  async create(body: UserDto) {
    //Создание пользователя

    //Проверка на уникальность
    const candidate = await this.userModel.findOne({ email: body.email });
    if (candidate) {
      throw new HttpException('Данная почта занята', HttpStatus.BAD_REQUEST);
    }

    //Создание пользователя
    const user = new this.userModel(body);
    await user.save();

    //Отправка ответа
    return { message: 'success' };
  }
  async autificating(email: string, code: number) {
    //Регистрация пользователя
    //Проверка на уникальность

    const candidate = await await this.userModel.findOne({ email });
    if (candidate) {
      await this.userModel.findByIdAndUpdate(candidate.id, { password: code });
      return candidate;
    }
    const user = new this.userModel({ email, password: code });
    await user.save();
    return user;
  }
  async authorization(email: string) {
    //Регистрация пользователя
    //Проверка на уникальность
    const user = await this.userModel.findOne({ email: email });
    return user;
  }
  async load({
    email,
    _id,
    role,
  }: {
    email: string;
    _id: string;
    role: string;
  }) {
    //load
    const admin = await this.userModel.find({ email: 'ewower12@gmail.com' });
    if (!admin) {
      new this.userModel({
        email: 'ewower12@gmail.com',
        password: '0000',
        role: 'admin',
      }).save();
    }
    const user = await this.userModel.findOne({ email, _id, role });

    return user;
  }
  async findAll(count: number) {
    //Получение пользователей

    const users = this.userModel
      .find()
      .skip(count * 30)
      .limit(30);
    return users;
  }
  async findOne(id: string) {
    //пойск по id
    const user = await this.userModel.findById(id);

    return user;
  }
  async update(body: UserDto, id: string) {
    //Редактирование пользователя

    //Проверка на уникальность
    const candidate = await this.userModel.findOne({ email: body.email });
    if (candidate && candidate.id !== id) {
      throw new HttpException('Данная почта занята', HttpStatus.BAD_REQUEST);
    }
    //редактирование пользователя
    await candidate.update(body);
    //Отправка на клиент
    return { message: 'Пользователь изменен' };
  }
  async destroy(id: string) {
    //Удаление пользователя

    await this.userModel.findByIdAndDelete(id);

    return { message: 'Пользователь удален' };
  }

  async payload(dto: { email: string; _id: string; role: string }) {
    return await this.userModel.findOne(dto);
  }
}
