import { z } from "zod";
export declare const CreateProductSchema: z.ZodObject<
  {
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    price: z.ZodNumber;
    quantity: z.ZodNumber;
    categoryId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
  },
  z.core.$strip
>;
export type CreateProductSchemaType = z.infer<typeof CreateProductSchema>;
export declare const CreateProductSchemaReturn: z.ZodObject<
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
export type CreateProductSchemaReturnType = z.infer<
  typeof CreateProductSchemaReturn
>;
