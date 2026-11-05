import { Injectable } from '@nestjs/common';
import {
  type CreateProductSchemaType,
  type QueryProductSchemaType,
  type UpdateProductSchemaType,
} from '@starter/shared';

import { PrismaService } from '../../../database/prisma/prisma.service';

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(body: CreateProductSchemaType) {
    return this.prisma.product.create({
      data: body,
    });
  }

  async findById(id: string) {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  async findAll(query: QueryProductSchemaType) {
    const { page } = query;

    const limit = 5;
    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
      this.prisma.product.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.product.count(),
    ]);

    return {
      products,
      total,
      page,
      totalPages: Math.ceil(total / limit),
      limit,
    };
  }

  async update(body: UpdateProductSchemaType, id: string) {
    return this.prisma.product.update({
      where: { id },
      data: body,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.product.delete({
      where: { id },
    });
  }
}
