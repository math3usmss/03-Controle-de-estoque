"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductSchemaReturn = exports.UpdateProductSchema = void 0;
const createProduct_schema_1 = require("./createProduct.schema");
const product_schema_1 = require("./product.schema");
exports.UpdateProductSchema =
  createProduct_schema_1.CreateProductSchema.partial();
exports.UpdateProductSchemaReturn = product_schema_1.ProductResponseSchema;
