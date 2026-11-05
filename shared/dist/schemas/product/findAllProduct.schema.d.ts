import { z } from "zod";
export declare const FindAllProductSchemaReturn: z.ZodObject<
  {
    products: z.ZodArray<
      z.ZodObject<
        {
          name: z.ZodString;
          description: z.ZodOptional<z.ZodString>;
          price: z.ZodNumber;
          quantity: z.ZodNumber;
          categoryId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
          id: z.ZodUUID;
          createdAt: z.ZodDate;
          updatedAt: z.ZodDate;
        },
        z.core.$strip
      >
    >;
    total: z.ZodNumber;
    page: z.ZodNumber;
    limit: z.ZodNumber;
    totalPages: z.ZodNumber;
  },
  z.core.$strip
>;
export type FindAllProductSchemaReturnType = z.infer<
  typeof FindAllProductSchemaReturn
>;
