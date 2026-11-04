import { z } from "zod";

import { CategoryResponseSchema } from "./category.schema";

export const FindByIdCategorySchemaReturn = CategoryResponseSchema;

export type FindByIdCategorySchemaReturnType = z.infer<
  typeof FindByIdCategorySchemaReturn
>;
