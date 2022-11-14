import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { join } from 'path';
import { PromocodeModule } from './promocode/promocode.module';
import { CityModule } from './city/city.module';
import { OrderModule } from './order/order.module';
import { ChatModule } from './chat/chat.module';
@Module({
  imports: [
    //MongooseModule.forRoot('mongodb://127.0.0.1:27017/zuminc2'),
    MongooseModule.forRoot(process.env.DB_CONNECTION_STRING),
    ServeStaticModule.forRoot({
      rootPath: './uploads',
      serveRoot: '/api/image/',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'),
    }),
    ProductModule,
    UserModule,
    AuthModule,
    MailModule,
    PromocodeModule,
    CityModule,
    OrderModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
