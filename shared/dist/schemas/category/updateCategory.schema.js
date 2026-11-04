"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategorySchemaReturn = exports.UpdateCategorySchema = void 0;
const createCategory_schema_1 = require("./createCategory.schema");
const category_schema_1 = require("./category.schema");
exports.UpdateCategorySchema =
  createCategory_schema_1.CreateCategorySchema.partial();
exports.UpdateCategorySchemaReturn = category_schema_1.CategoryResponseSchema;
