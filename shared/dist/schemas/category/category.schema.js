"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryResponseSchema = exports.CategorySchema = void 0;
const zod_1 = require("zod");
exports.CategorySchema = zod_1.z.object({
  name: zod_1.z.string(),
  color: zod_1.z.string().optional(),
});
exports.CategoryResponseSchema = exports.CategorySchema.extend({
  id: zod_1.z.uuid(),
  createdAt: zod_1.z.date(),
  updatedAt: zod_1.z.date(),
});
