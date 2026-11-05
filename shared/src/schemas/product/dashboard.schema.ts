import { z } from "zod";

export const DashboardOverviewSchemaReturn = z.object({
  summary: z.object({
    totalProducts: z.number().int().nonnegative(),
    totalStockValue: z.number().nonnegative(),
    totalUnits: z.number().int().nonnegative(),
    outOfStock: z.number().int().nonnegative(),
  }),

  topProductsByValue: z.array(
    z.object({
      id: z.string().uuid(),
      name: z.string(),
      value: z.number().nonnegative(),
    }),
  ),

  productsByCategory: z.array(
    z.object({
      categoryId: z.string().uuid().nullable(),
      categoryName: z.string(),
      count: z.number().int().nonnegative(),
    }),
  ),

  stockByCategory: z.array(
    z.object({
      categoryId: z.string().uuid().nullable(),
      categoryName: z.string(),
      quantity: z.number().int().nonnegative(),
    }),
  ),
});

export type DashboardOverviewSchemaReturnType = z.infer<
  typeof DashboardOverviewSchemaReturn
>;
