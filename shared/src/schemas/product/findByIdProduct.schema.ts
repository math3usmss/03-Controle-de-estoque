import { z } from "zod";

import { ProductResponseSchema } from "./product.schema";

export const FindByIdProductSchemaReturn = ProductResponseSchema;

export type FindByIdProductSchemaReturnType = z.infer<
  typeof FindByIdProductSchemaReturn
>;
