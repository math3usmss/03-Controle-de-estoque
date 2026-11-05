import { Injectable } from '@nestjs/common';

import { ProductRepository } from '../repository/product.repository';

@Injectable()
export class DeleteProductUsecase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }
}
