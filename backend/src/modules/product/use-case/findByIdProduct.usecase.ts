import { Injectable, NotFoundException } from '@nestjs/common';
import {
  FindByIdProductSchemaReturn,
  type FindByIdProductSchemaReturnType,
} from '@starter/shared';

import { ProductRepository } from '../repository/product.repository';

@Injectable()
export class FindByIdProductUsecase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: string): Promise<FindByIdProductSchemaReturnType> {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new NotFoundException('Produto não encontrado');
    }

    return FindByIdProductSchemaReturn.parse(product);
  }
}
