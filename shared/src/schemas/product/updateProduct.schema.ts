import { z } from "zod";

import { CreateProductSchema } from "./createProduct.schema";
import { ProductResponseSchema } from "./product.schema";

export const UpdateProductSchema = CreateProductSchema.partial();

export type UpdateProductSchemaType = z.infer<typeof UpdateProductSchema>;

export const UpdateProductSchemaReturn = ProductResponseSchema;

export type UpdateProductSchemaReturnType = z.infer<
  typeof UpdateProductSchemaReturn
>;
