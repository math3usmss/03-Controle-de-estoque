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
          category: z.ZodNullable<
            z.ZodObject<
              {
                id: z.ZodString;
                name: z.ZodString;
                color: z.ZodNullable<z.ZodString>;
              },
              z.core.$strip
            >
          >;
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
