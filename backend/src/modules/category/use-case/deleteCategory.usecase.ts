import { Injectable } from '@nestjs/common';

import { CategoryRepository } from '../repository/category.repository';

@Injectable()
export class DeleteCategoryUsecase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(id: string): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
