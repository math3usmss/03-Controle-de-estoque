import { z } from "zod";
export declare const FindByIdCategorySchemaReturn: z.ZodObject<
  {
    name: z.ZodString;
    color: z.ZodOptional<z.ZodString>;
    id: z.ZodUUID;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  z.core.$strip
>;
export type FindByIdCategorySchemaReturnType = z.infer<
  typeof FindByIdCategorySchemaReturn
>;
