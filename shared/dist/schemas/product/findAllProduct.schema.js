"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllProductSchemaReturn = void 0;
const zod_1 = require("zod");
const product_schema_1 = require("./product.schema");
exports.FindAllProductSchemaReturn = zod_1.z.object({
  products: zod_1.z.array(
    product_schema_1.ProductResponseSchema.extend({
      category: zod_1.z
        .object({
          id: zod_1.z.string(),
          name: zod_1.z.string(),
          color: zod_1.z.string().nullable(),
        })
        .nullable(),
    }),
  ),
  total: zod_1.z.number().int().nonnegative(),
  page: zod_1.z.number().int().min(1),
  limit: zod_1.z.number().int().positive(),
  totalPages: zod_1.z.number().int().nonnegative(),
});
