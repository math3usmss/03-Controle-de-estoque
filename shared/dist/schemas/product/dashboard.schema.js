"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardOverviewSchemaReturn = void 0;
const zod_1 = require("zod");
exports.DashboardOverviewSchemaReturn = zod_1.z.object({
  summary: zod_1.z.object({
    totalProducts: zod_1.z.number().int().nonnegative(),
    totalStockValue: zod_1.z.number().nonnegative(),
    totalUnits: zod_1.z.number().int().nonnegative(),
    outOfStock: zod_1.z.number().int().nonnegative(),
  }),
  topProductsByValue: zod_1.z.array(
    zod_1.z.object({
      id: zod_1.z.string().uuid(),
      name: zod_1.z.string(),
      value: zod_1.z.number().nonnegative(),
    }),
  ),
  productsByCategory: zod_1.z.array(
    zod_1.z.object({
      categoryId: zod_1.z.string().uuid().nullable(),
      categoryName: zod_1.z.string(),
      count: zod_1.z.number().int().nonnegative(),
    }),
  ),
  stockByCategory: zod_1.z.array(
    zod_1.z.object({
      categoryId: zod_1.z.string().uuid().nullable(),
      categoryName: zod_1.z.string(),
      quantity: zod_1.z.number().int().nonnegative(),
    }),
  ),
});
