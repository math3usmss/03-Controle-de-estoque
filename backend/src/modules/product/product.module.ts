import { Module } from '@nestjs/common';

import { ProductController } from './controller/product.controller';
import { ProductRepository } from './repository/product.repository';
import {
  CreateProductUsecase,
  DeleteProductUsecase,
  FindAllProductUsecase,
  FindByIdProductUsecase,
  UpdateProductUsecase,
} from './use-case';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [
    ProductRepository,
    CreateProductUsecase,
    FindAllProductUsecase,
    FindByIdProductUsecase,
    UpdateProductUsecase,
    DeleteProductUsecase,
  ],
})
export class ProductModule {}
