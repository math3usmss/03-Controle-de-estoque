"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllCategorySchemaReturn = void 0;
const zod_1 = require("zod");
const category_schema_1 = require("./category.schema");
exports.FindAllCategorySchemaReturn = zod_1.z.object({
  categorys: zod_1.z.array(category_schema_1.CategoryResponseSchema),
  total: zod_1.z.number().int().nonnegative(),
  page: zod_1.z.number().int().min(1),
  limit: zod_1.z.number().int().positive(),
  totalPages: zod_1.z.number().int().nonnegative(),
});
