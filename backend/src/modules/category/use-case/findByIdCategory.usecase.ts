import { Injectable, NotFoundException } from '@nestjs/common';
import {
  FindByIdCategorySchemaReturn,
  type FindByIdCategorySchemaReturnType,
} from '@starter/shared';

import { CategoryRepository } from '../repository/category.repository';

@Injectable()
export class FindByIdCategoryUsecase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(id: string): Promise<FindByIdCategorySchemaReturnType> {
    const category = await this.categoryRepository.findById(id);

    if (!category) {
      throw new NotFoundException('Categoria não encontrada');
    }

    return FindByIdCategorySchemaReturn.parse(category);
  }
}
