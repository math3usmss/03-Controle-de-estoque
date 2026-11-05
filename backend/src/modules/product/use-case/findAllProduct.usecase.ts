import { Injectable } from '@nestjs/common';
import {
  FindAllProductSchemaReturn,
  type FindAllProductSchemaReturnType,
  type QueryProductSchemaType,
} from '@starter/shared';

import { ProductRepository } from '../repository/product.repository';

@Injectable()
export class FindAllProductUsecase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(
    query: QueryProductSchemaType,
  ): Promise<FindAllProductSchemaReturnType> {
    const result = await this.productRepository.findAll(query);

    return FindAllProductSchemaReturn.parse(result);
  }
}
