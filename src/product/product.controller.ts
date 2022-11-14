import {
  ProductAttributeDto,
  ProductCategoryDto,
  EditProductAttributeDto,
  EditProductCategoryDto,
  ProductDto,
} from './dto/product.attribute.dto';
import {
  CategoryService,
  AttributeService,
  ProductService,
} from './product.service';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseInterceptors,
  UploadedFiles,
  HttpException,
  HttpStatus,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/role.guard';
@Controller('product')
export class ProductController {
  constructor(
    private attributeService: AttributeService,
    private categoryService: CategoryService,
    private productService: ProductService,
  ) {}

  //Атрибуты
  @UseGuards(AuthGuard)
  @Get('attribute')
  findAllAttribute(@Req() req: Request) {
    console.log(req['user']);
    return this.attributeService.findAllAttribute();
  }
  @Get('attribute/ids=:id')
  findByIdsAttribute(@Param('id') id: string) {
    return this.attributeService.findByIdsAttributes(id.split(','));
  }
  @Get('attribute/:id')
  findByIdAttribute(@Param('id') id: string) {
    return this.attributeService.findOneAttribute(id);
  }
  @Post('attribute')
  createAttribute(@Body() dto: ProductAttributeDto) {
    return this.attributeService.createAttribute(dto);
  }
  @Put('attribute/:id')
  updateAttribute(
    @Body() dto: EditProductAttributeDto,
    @Param('id') id: string,
  ) {
    return this.attributeService.updateAttribute(dto, id);
  }
  @Delete('attribute/:id')
  destroyAttribute(@Param('id') id: string) {
    return this.attributeService.destroyAttribute(id);
  }

  //Категорий
  @Get('category')
  findAllCategory() {
    return this.categoryService.findAllCategory();
  }
  @Get('category/:id')
  findByIdCategory(@Param('id') id: string) {
    return this.categoryService.findOneCategory(id);
  }
  @Post('category')
  createCategory(@Body() dto: ProductCategoryDto) {
    return this.categoryService.createCategory(dto);
  }
  @Put('category/:id')
  updateCategory(@Body() dto: EditProductCategoryDto, @Param('id') id: string) {
    return this.categoryService.updateCategory(dto, id);
  }
  @Delete('category/:id')
  destroyCategory(@Param('id') id: string) {
    return this.categoryService.destroyCategory(id);
  }

  //Товары
  @Get('/')
  findAllProduct(@Query() query: object) {
    return this.productService.findCountProduct(query);
  }
  @Get('/id=:id')
  findByIdProduct(@Param('id') id: string) {
    return this.productService.findOneProduct(id);
  }
  @Get('/param=:param')
  getParam(@Param('param') param: string) {
    return this.productService.findParam(param);
  }
  @Post('/')
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          console.log(file.originalname);
          cb(null, uuidv4() + extname(file.originalname));
        },
      }),
      fileFilter: imageFileFilter,
    }),
  )
  createProduct(@UploadedFiles() files: any, @Body() dto: ProductDto) {
    dto.image = files.map((item) => '/api/image/' + item.filename);
    if (typeof dto.attribute === 'string') {
      dto.attribute = JSON.parse(dto.attribute);
    }
    return this.productService.createProduct(dto);
  }
  @Put('/id=:id')
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: diskStorage({
        destination: '../uploads',
        filename: (req, file, cb) => {
          cb(null, uuidv4() + extname(file.originalname));
        },
      }),
      fileFilter: imageFileFilter,
    }),
  )
  updateProduct(
    @UploadedFiles() files: any,
    @Body() dto: ProductDto,
    @Param('id') id: string,
  ) {
    dto.image = files.map((item) => '/api/image/' + item.filename);
    if (typeof dto.attribute === 'string') {
      dto.attribute = JSON.parse(dto.attribute);
    }
    return this.productService.updateProduct(dto, id);
  }
  @Delete('/:id')
  destroyProduct(@Param('id') id: string) {
    return this.productService.destroyProduct(id);
  }
}
export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(
      new HttpException(
        'Only image files are allowed!',
        HttpStatus.BAD_REQUEST,
      ),
      false,
    );
  }
  callback(null, true);
};
export const editFileName = (req, file, callback) => {
  const name = file.originalname.split('.');
  const fileExtName = extname(file.originalname);
  callback(null, `${Date.now()}${name[1]}`);
};
