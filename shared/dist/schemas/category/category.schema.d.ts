import { z } from "zod";
export declare const CategorySchema: z.ZodObject<
  {
    name: z.ZodString;
    color: z.ZodOptional<z.ZodString>;
  },
  z.core.$strip
>;
export declare const CategoryResponseSchema: z.ZodObject<
  {
    name: z.ZodString;
    color: z.ZodOptional<z.ZodString>;
    id: z.ZodUUID;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
  },
  z.core.$strip
>;
