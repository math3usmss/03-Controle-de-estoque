import { z } from "zod";
export declare const CreateCategorySchema: z.ZodObject<
  {
    name: z.ZodString;
    color: z.ZodOptional<z.ZodString>;
  },
  z.core.$strip
>;
export type CreateCategorySchemaType = z.infer<typeof CreateCategorySchema>;
export declare const CreateCategorySchemaReturn: z.ZodObject<
  {
    name: z.ZodString;
    color: z.ZodOptional<z.ZodString>;
    id: z.ZodUUID;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  z.core.$strip
>;
export type CreateCategorySchemaReturnType = z.infer<
  typeof CreateCategorySchemaReturn
>;
