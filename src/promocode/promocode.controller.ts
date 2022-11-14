import { PromocodeDto } from './dto/promocode.dto';
import { PromocodeService } from './promocode.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('promocode')
export class PromocodeController {
  constructor(private service: PromocodeService) {}
  @Post()
  create(@Body() dto: PromocodeDto) {
    //Создание промокода
    return this.service.create(dto);
  }
  @Get()
  findAll(@Query('count') count: number) {
    //Получение всех промокодов
    return this.service.findAll(count);
  }
  @Get('/id=:id')
  findById(@Param('id') id: string) {
    //Пойск по id
    return this.service.findById(id);
  }
  @Get('/name=:name')
  findPromocode(@Param('name') name: string) {
    //пойск по названию
    return this.service.findPromocode(name);
  }
  @Put('/:id')
  update(@Body() dto: PromocodeDto, @Param('id') id: string) {
    // редактирование
    return this.service.update(dto, id);
  }
  @Delete('/:id')
  destroy(@Param('id') id: string) {
    // Удаление
    return this.service.destroy(id);
  }
}
