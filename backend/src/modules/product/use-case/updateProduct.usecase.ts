import { Injectable } from '@nestjs/common';
import {
  UpdateProductSchemaReturn,
  type UpdateProductSchemaReturnType,
  type UpdateProductSchemaType,
} from '@starter/shared';

import { ProductRepository } from '../repository/product.repository';

@Injectable()
export class UpdateProductUsecase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(
    body: UpdateProductSchemaType,
    id: string,
  ): Promise<UpdateProductSchemaReturnType> {
    const product = await this.productRepository.update(body, id);

    return UpdateProductSchemaReturn.parse(product);
  }
}
