import { z } from "zod";
export declare const QueryCategorySchema: z.ZodObject<
  {
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
  },
  z.core.$strip
>;
export type QueryCategorySchemaType = z.infer<typeof QueryCategorySchema>;
