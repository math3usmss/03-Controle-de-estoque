import { z } from "zod";
export declare const FindByIdProductSchemaReturn: z.ZodObject<
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
>;
export type FindByIdProductSchemaReturnType = z.infer<
  typeof FindByIdProductSchemaReturn
>;
