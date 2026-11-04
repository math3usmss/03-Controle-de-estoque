import { z } from "zod";
export declare const FindAllCategorySchemaReturn: z.ZodObject<
  {
    categorys: z.ZodArray<
      z.ZodObject<
        {
          name: z.ZodString;
          color: z.ZodOptional<z.ZodString>;
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
export type FindAllCategorySchemaReturnType = z.infer<
  typeof FindAllCategorySchemaReturn
>;
