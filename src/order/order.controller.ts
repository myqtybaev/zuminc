import { AuthGuard } from './../auth/auth.guard';
import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';

@Controller('order')
export class OrderController {
  constructor(private service: OrderService) {}
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() dto: OrderDto, @Req() req: Request) {
    //@ts-ignore
    return this.service.create(dto, req?.user.id);
  }
  @Post('edit=:id')
  edit(@Param('id') id: string, @Body() dto: { type: string; text: string }) {
    return this.service.edit(dto.type, dto.text, id);
  }
  @Get('id=:id')
  findById(@Param('id') id: string) {
    return this.service.findById(id);
  }
  @Get('user')
  @UseGuards(AuthGuard)
  findUser(@Req() req: Request) {
    //@ts-ignore

    return this.service.findUser(req.user.id);
  }
  @Get()
  findAll(@Query('count') count: number) {
    return this.service.findAll(count);
  }
}
