"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllProductSchemaReturn = void 0;
const zod_1 = require("zod");
const product_schema_1 = require("./product.schema");
exports.FindAllProductSchemaReturn = zod_1.z.object({
  products: zod_1.z.array(product_schema_1.ProductResponseSchema),
  total: zod_1.z.number().int().nonnegative(),
  page: zod_1.z.number().int().min(1),
  limit: zod_1.z.number().int().positive(),
  totalPages: zod_1.z.number().int().nonnegative(),
});
