import { z } from "zod";

import { PaginationQuerySchema } from "../../common/paginationQuery.schema";

export const QueryProductSchema = PaginationQuerySchema.extend({
  search: z.string().optional(),
  categoryId: z.union([z.uuid(), z.literal("uncategorized")]).optional(),
});

export type QueryProductSchemaType = z.infer<typeof QueryProductSchema>;
