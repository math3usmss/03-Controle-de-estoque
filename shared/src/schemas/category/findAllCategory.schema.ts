import { z } from "zod";

import { CategoryResponseSchema } from "./category.schema";

export const FindAllCategorySchemaReturn = z.object({
  categorys: z.array(CategoryResponseSchema),
  total: z.number().int().nonnegative(),
  page: z.number().int().min(1),
  limit: z.number().int().positive(),
  totalPages: z.number().int().nonnegative(),
});

export type FindAllCategorySchemaReturnType = z.infer<
  typeof FindAllCategorySchemaReturn
>;
