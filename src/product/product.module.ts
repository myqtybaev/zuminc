import { UserModule } from './../user/user.module';
import { AuthModule } from './../auth/auth.module';
import {
  Attribute,
  AttributeSchema,
  Category,
  CategorySchema,
  Product,
  ProductSchema,
} from './product.model';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import {
  AttributeService,
  CategoryService,
  ProductService,
} from './product.service';
import { MulterModule } from '@nestjs/platform-express/multer';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Attribute.name, schema: AttributeSchema },
      { name: Category.name, schema: CategorySchema },
      { name: Product.name, schema: ProductSchema },
    ]),
    MulterModule.register({
      dest: './upload',
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [ProductController],
  providers: [AttributeService, CategoryService, ProductService],
})
export class ProductModule {}
