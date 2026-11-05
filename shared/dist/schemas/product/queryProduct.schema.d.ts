import { z } from "zod";
export declare const QueryProductSchema: z.ZodObject<
  {
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    search: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodOptional<
      z.ZodUnion<readonly [z.ZodUUID, z.ZodLiteral<"uncategorized">]>
    >;
  },
  z.core.$strip
>;
export type QueryProductSchemaType = z.infer<typeof QueryProductSchema>;
