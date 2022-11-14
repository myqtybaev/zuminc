import { PromocodeSchema, Promocode } from './promocode.shema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PromocodeService } from './promocode.service';
import { PromocodeController } from './promocode.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Promocode.name, schema: PromocodeSchema },
    ]),
  ],
  providers: [PromocodeService],
  controllers: [PromocodeController],
})
export class PromocodeModule {}
