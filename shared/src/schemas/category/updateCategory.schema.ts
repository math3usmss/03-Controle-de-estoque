import { z } from "zod";

import { CreateCategorySchema } from "./createCategory.schema";
import { CategoryResponseSchema } from "./category.schema";

export const UpdateCategorySchema = CreateCategorySchema.partial();

export type UpdateCategorySchemaType = z.infer<typeof UpdateCategorySchema>;

export const UpdateCategorySchemaReturn = CategoryResponseSchema;

export type UpdateCategorySchemaReturnType = z.infer<
  typeof UpdateCategorySchemaReturn
>;
