import { z } from "zod";
export declare const QueryProductSchema: z.ZodObject<
  {
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
  },
  z.core.$strip
>;
export type QueryProductSchemaType = z.infer<typeof QueryProductSchema>;
