import { z } from "zod";

import { CategorySchema, CategoryResponseSchema } from "./category.schema";

export const CreateCategorySchema = CategorySchema;

export type CreateCategorySchemaType = z.infer<typeof CreateCategorySchema>;

export const CreateCategorySchemaReturn = CategoryResponseSchema;

export type CreateCategorySchemaReturnType = z.infer<
  typeof CreateCategorySchemaReturn
>;
