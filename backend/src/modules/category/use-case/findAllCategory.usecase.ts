import { Injectable } from '@nestjs/common';
import {
  FindAllCategorySchemaReturn,
  type FindAllCategorySchemaReturnType,
  type QueryCategorySchemaType,
} from '@starter/shared';

import { CategoryRepository } from '../repository/category.repository';

@Injectable()
export class FindAllCategoryUsecase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(
    query: QueryCategorySchemaType,
  ): Promise<FindAllCategorySchemaReturnType> {
    const result = await this.categoryRepository.findAll(query);

    return FindAllCategorySchemaReturn.parse(result);
  }
}
