import { MailModule } from './../mail/mail.module';
import { UserModule } from './../user/user.module';
import { AuthModule } from './../auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order, OrderSchema } from './order.shema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    AuthModule,
    UserModule,
    MailModule,
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
