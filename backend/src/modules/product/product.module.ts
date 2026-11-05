import { Module } from '@nestjs/common';

import { CategoryRepository } from '../category/repository/category.repository';
import { ProductController } from './controller/product.controller';
import { ProductRepository } from './repository/product.repository';
import {
  ChangeQuantityProductUsecase,
  CreateProductUsecase,
  DeleteProductUsecase,
  FindAllProductUsecase,
  FindByIdProductUsecase,
  GetDashboardOverviewUseCase,
  UpdateProductUsecase,
} from './use-case';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [
    CategoryRepository,
    ProductRepository,
    CreateProductUsecase,
    FindAllProductUsecase,
    FindByIdProductUsecase,
    GetDashboardOverviewUseCase,
    UpdateProductUsecase,
    ChangeQuantityProductUsecase,
    DeleteProductUsecase,
  ],
})
export class ProductModule {}
