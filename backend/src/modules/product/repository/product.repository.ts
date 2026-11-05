import { Injectable } from '@nestjs/common';
import {
  type CreateProductSchemaType,
  type QueryProductSchemaType,
  type UpdateProductSchemaType,
} from '@starter/shared';

import { PrismaService } from '../../../database/prisma/prisma.service';
import { Prisma } from '../../../generated/prisma/client';

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
    const { page, search, categoryId } = query;

    const limit = 5;
    const skip = (page - 1) * limit;

    const where: Prisma.ProductWhereInput = {
      ...(search && {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          {
            category: {
              is: {
                name: { contains: search, mode: 'insensitive' },
              },
            },
          },
        ],
      }),

      ...(categoryId === 'uncategorized'
        ? { categoryId: null }
        : categoryId
          ? { categoryId }
          : {}),
    };

    const [products, total] = await Promise.all([
      this.prisma.product.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        where,
        include: {
          category: {
            select: {
              id: true,
              name: true,
              color: true,
            },
          },
        },
      }),

      this.prisma.product.count({ where }),
    ]);

    return {
      products,
      total,
      page,
      totalPages: Math.ceil(total / limit),
      limit,
    };
  }

  async findAllProducts() {
    return this.prisma.product.findMany();
  }

  async changeQuantity(id: string, quantity: number) {
    return this.prisma.product.update({
      where: { id },
      data: { quantity },
    });
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
