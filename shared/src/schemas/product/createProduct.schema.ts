import { z } from "zod";

import { ProductSchema, ProductResponseSchema } from "./product.schema";

export const CreateProductSchema = ProductSchema;

export type CreateProductSchemaType = z.infer<typeof CreateProductSchema>;

export const CreateProductSchemaReturn = ProductResponseSchema;

export type CreateProductSchemaReturnType = z.infer<
  typeof CreateProductSchemaReturn
>;
