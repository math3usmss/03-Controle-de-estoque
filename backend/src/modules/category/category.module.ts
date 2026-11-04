import { Module } from '@nestjs/common';

import { CategoryController } from './controller/category.controller';
import { CategoryRepository } from './repository/category.repository';
import {
  CreateCategoryUsecase,
  DeleteCategoryUsecase,
  FindAllCategoryUsecase,
  FindByIdCategoryUsecase,
  UpdateCategoryUsecase,
} from './use-case';

@Module({
  imports: [],
  controllers: [CategoryController],
  providers: [
    CategoryRepository,
    CreateCategoryUsecase,
    FindAllCategoryUsecase,
    FindByIdCategoryUsecase,
    UpdateCategoryUsecase,
    DeleteCategoryUsecase,
  ],
})
export class CategoryModule {}
