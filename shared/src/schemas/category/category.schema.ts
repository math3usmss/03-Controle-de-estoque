import { z } from "zod";

export const CategorySchema = z.object({
  name: z.string(),
  color: z.string().optional(),
});

export const CategoryResponseSchema = CategorySchema.extend({
  id: z.uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
