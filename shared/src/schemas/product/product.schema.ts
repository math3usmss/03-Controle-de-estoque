import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  price: z.number().min(0),
  quantity: z.number().min(0),
  categoryId: z.string().uuid().optional().nullable(),
});

export const ProductResponseSchema = ProductSchema.extend({
  id: z.uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
