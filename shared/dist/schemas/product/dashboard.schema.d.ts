import { z } from "zod";
export declare const DashboardOverviewSchemaReturn: z.ZodObject<
  {
    summary: z.ZodObject<
      {
        totalProducts: z.ZodNumber;
        totalStockValue: z.ZodNumber;
        totalUnits: z.ZodNumber;
        outOfStock: z.ZodNumber;
      },
      z.core.$strip
    >;
    topProductsByValue: z.ZodArray<
      z.ZodObject<
        {
          id: z.ZodString;
          name: z.ZodString;
          value: z.ZodNumber;
        },
        z.core.$strip
      >
    >;
    productsByCategory: z.ZodArray<
      z.ZodObject<
        {
          categoryId: z.ZodNullable<z.ZodString>;
          categoryName: z.ZodString;
          count: z.ZodNumber;
        },
        z.core.$strip
      >
    >;
    stockByCategory: z.ZodArray<
      z.ZodObject<
        {
          categoryId: z.ZodNullable<z.ZodString>;
          categoryName: z.ZodString;
          quantity: z.ZodNumber;
        },
        z.core.$strip
      >
    >;
  },
  z.core.$strip
>;
export type DashboardOverviewSchemaReturnType = z.infer<
  typeof DashboardOverviewSchemaReturn
>;
