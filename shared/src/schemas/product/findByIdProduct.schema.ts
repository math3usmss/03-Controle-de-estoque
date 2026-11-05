import { z } from "zod";

import { ProductResponseSchema } from "./product.schema";

export const FindByIdProductSchemaReturn = ProductResponseSchema.extend({
  category: z
    .object({
      id: z.string(),
      name: z.string(),
      color: z.string().nullable(),
    })
    .nullable(),
});

export type FindByIdProductSchemaReturnType = z.infer<
  typeof FindByIdProductSchemaReturn
>;
