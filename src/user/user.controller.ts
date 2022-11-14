import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
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

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/')
  createUser(@Body() dto: UserDto) {
    return this.userService.create(dto);
  }
  @Get('/')
  findAll(@Query('count') count: number) {
    return this.userService.findAll(count);
  }
  @Get('/id=:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
  @Put('/id=:id')
  update(@Body() dto: UserDto, @Param('id') id: string) {
    return this.userService.update(dto, id);
  }
  @Delete('/:id')
  destroy(@Param('id') id: string) {
    return this.userService.destroy(id);
  }
}
