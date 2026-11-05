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
  },
  z.core.$strip
>;
export type FindByIdProductSchemaReturnType = z.infer<
  typeof FindByIdProductSchemaReturn
>;
