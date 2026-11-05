import { Injectable } from '@nestjs/common';
import {
  CreateProductSchemaReturn,
  type CreateProductSchemaReturnType,
  type CreateProductSchemaType,
} from '@starter/shared';

import { ProductRepository } from '../repository/product.repository';

@Injectable()
export class CreateProductUsecase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(
    body: CreateProductSchemaType,
  ): Promise<CreateProductSchemaReturnType> {
    const product = await this.productRepository.create(body);

    return CreateProductSchemaReturn.parse(product);
  }
}
