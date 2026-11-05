"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResponseSchema = exports.ProductSchema = void 0;
const zod_1 = require("zod");
exports.ProductSchema = zod_1.z.object({
  name: zod_1.z.string().min(1),
  description: zod_1.z.string().optional(),
  price: zod_1.z.number().min(0),
  quantity: zod_1.z.number().min(0),
  categoryId: zod_1.z.string().uuid().optional().nullable(),
});
exports.ProductResponseSchema = exports.ProductSchema.extend({
  id: zod_1.z.uuid(),
  createdAt: zod_1.z.date(),
  updatedAt: zod_1.z.date(),
});
