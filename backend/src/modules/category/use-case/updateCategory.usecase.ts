import { Injectable } from '@nestjs/common';
import {
  UpdateCategorySchemaReturn,
  type UpdateCategorySchemaReturnType,
  type UpdateCategorySchemaType,
} from '@starter/shared';

import { CategoryRepository } from '../repository/category.repository';

@Injectable()
export class UpdateCategoryUsecase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(
    body: UpdateCategorySchemaType,
    id: string,
  ): Promise<UpdateCategorySchemaReturnType> {
    const category = await this.categoryRepository.update(body, id);

    return UpdateCategorySchemaReturn.parse(category);
  }
}
