import { z } from "zod";

import { ProductResponseSchema } from "./product.schema";

export const FindAllProductSchemaReturn = z.object({
  products: z.array(ProductResponseSchema),
  total: z.number().int().nonnegative(),
  page: z.number().int().min(1),
  limit: z.number().int().positive(),
  totalPages: z.number().int().nonnegative(),
});

export type FindAllProductSchemaReturnType = z.infer<
  typeof FindAllProductSchemaReturn
>;
