import { Injectable } from '@nestjs/common';
import {
  DashboardOverviewSchemaReturn,
  type DashboardOverviewSchemaReturnType,
} from '@starter/shared';

import { CategoryRepository } from '../../category/repository/category.repository';
import { ProductRepository } from '../repository/product.repository';

@Injectable()
export class GetDashboardOverviewUseCase {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async execute(): Promise<DashboardOverviewSchemaReturnType> {
    const [products, categories] = await Promise.all([
      this.productRepository.findAllProducts(),
      this.categoryRepository.findAllCategories(),
    ]);

    const summary = {
      totalProducts: products.length,
      totalStockValue: 0,
      totalUnits: 0,
      outOfStock: 0,
    };

    for (const product of products) {
      summary.totalStockValue += product.price * product.quantity;
      summary.totalUnits += product.quantity;

      if (product.quantity === 0) {
        summary.outOfStock++;
      }
    }

    const topProductsByValue = products
      .map((product) => ({
        id: product.id,
        name: product.name,
        value: product.price * product.quantity,
      }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 10);

    const categoryMap = new Map<
      string,
      {
        categoryId: string | null;
        categoryName: string;
        count: number;
        quantity: number;
      }
    >();

    for (const category of categories) {
      categoryMap.set(category.id, {
        categoryId: category.id,
        categoryName: category.name,
        count: 0,
        quantity: 0,
      });
    }

    categoryMap.set('uncategorized', {
      categoryId: null,
      categoryName: 'Sem categoria',
      count: 0,
      quantity: 0,
    });

    for (const product of products) {
      const category = categoryMap.get(product.categoryId ?? 'uncategorized');

      if (!category) continue;

      category.count++;
      category.quantity += product.quantity;
    }

    const categoryStats = [...categoryMap.values()];

    return DashboardOverviewSchemaReturn.parse({
      summary,
      topProductsByValue,
      productsByCategory: categoryStats.map((category) => ({
        categoryId: category.categoryId,
        categoryName: category.categoryName,
        count: category.count,
      })),
      stockByCategory: categoryStats.map((category) => ({
        categoryId: category.categoryId,
        categoryName: category.categoryName,
        quantity: category.quantity,
      })),
    });
  }
}
