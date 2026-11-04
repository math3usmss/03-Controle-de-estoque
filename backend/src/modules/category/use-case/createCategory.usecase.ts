import { Injectable } from '@nestjs/common';
import {
  CreateCategorySchemaReturn,
  type CreateCategorySchemaReturnType,
  type CreateCategorySchemaType,
} from '@starter/shared';

import { CategoryRepository } from '../repository/category.repository';

@Injectable()
export class CreateCategoryUsecase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(
    body: CreateCategorySchemaType,
  ): Promise<CreateCategorySchemaReturnType> {
    const category = await this.categoryRepository.create(body);

    return CreateCategorySchemaReturn.parse(category);
  }
}
