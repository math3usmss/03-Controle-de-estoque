import { Injectable } from '@nestjs/common';
import {
  type CreateCategorySchemaType,
  type QueryCategorySchemaType,
  type UpdateCategorySchemaType,
} from '@starter/shared';

import { PrismaService } from '../../../database/prisma/prisma.service';

@Injectable()
export class CategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(body: CreateCategorySchemaType) {
    return this.prisma.category.create({
      data: body,
    });
  }

  async findById(id: string) {
    return this.prisma.category.findUnique({
      where: { id },
    });
  }

  async findAll(query: QueryCategorySchemaType) {
    const { page } = query;

    const limit = 5;
    const skip = (page - 1) * limit;

    const [categorys, total] = await Promise.all([
      this.prisma.category.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.category.count(),
    ]);

    return {
      categorys,
      total,
      page,
      totalPages: Math.ceil(total / limit),
      limit,
    };
  }

  async update(body: UpdateCategorySchemaType, id: string) {
    return this.prisma.category.update({
      where: { id },
      data: body,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.category.delete({
      where: { id },
    });
  }
}
