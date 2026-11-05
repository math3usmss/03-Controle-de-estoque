import { z } from "zod";
export declare const UpdateProductSchema: z.ZodObject<
  {
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    price: z.ZodOptional<z.ZodNumber>;
    quantity: z.ZodOptional<z.ZodNumber>;
    categoryId: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
  },
  z.core.$strip
>;
export type UpdateProductSchemaType = z.infer<typeof UpdateProductSchema>;
export declare const UpdateProductSchemaReturn: z.ZodObject<
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
export type UpdateProductSchemaReturnType = z.infer<
  typeof UpdateProductSchemaReturn
>;
