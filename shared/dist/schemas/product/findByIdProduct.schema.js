"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindByIdProductSchemaReturn = void 0;
const zod_1 = require("zod");
const product_schema_1 = require("./product.schema");
exports.FindByIdProductSchemaReturn =
  product_schema_1.ProductResponseSchema.extend({
    category: zod_1.z
      .object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
        color: zod_1.z.string().nullable(),
      })
      .nullable(),
  });
