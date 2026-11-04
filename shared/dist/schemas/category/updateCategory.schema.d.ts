import { z } from "zod";
export declare const UpdateCategorySchema: z.ZodObject<
  {
    name: z.ZodOptional<z.ZodString>;
    color: z.ZodOptional<z.ZodOptional<z.ZodString>>;
  },
  z.core.$strip
>;
export type UpdateCategorySchemaType = z.infer<typeof UpdateCategorySchema>;
export declare const UpdateCategorySchemaReturn: z.ZodObject<
  {
    name: z.ZodString;
    color: z.ZodOptional<z.ZodString>;
    id: z.ZodUUID;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  z.core.$strip
>;
export type UpdateCategorySchemaReturnType = z.infer<
  typeof UpdateCategorySchemaReturn
>;
