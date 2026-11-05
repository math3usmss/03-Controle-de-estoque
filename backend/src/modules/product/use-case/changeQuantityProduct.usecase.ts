import { Injectable } from '@nestjs/common';
import {
  UpdateProductSchemaReturn,
  type UpdateProductSchemaReturnType,
} from '@starter/shared';

import { ProductRepository } from '../repository/product.repository';

@Injectable()
export class ChangeQuantityProductUsecase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(
    quantity: number,
    id: string,
  ): Promise<UpdateProductSchemaReturnType> {
    const product = await this.productRepository.changeQuantity(id, quantity);

    return UpdateProductSchemaReturn.parse(product);
  }
}
