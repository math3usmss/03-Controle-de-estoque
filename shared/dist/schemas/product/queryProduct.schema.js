"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryProductSchema = void 0;
const zod_1 = require("zod");
const paginationQuery_schema_1 = require("../../common/paginationQuery.schema");
exports.QueryProductSchema =
  paginationQuery_schema_1.PaginationQuerySchema.extend({
    search: zod_1.z.string().optional(),
    categoryId: zod_1.z
      .union([zod_1.z.uuid(), zod_1.z.literal("uncategorized")])
      .optional(),
  });
