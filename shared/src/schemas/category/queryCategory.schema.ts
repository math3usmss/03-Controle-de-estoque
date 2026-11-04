import { z } from "zod";

import { PaginationQuerySchema } from "../../common/paginationQuery.schema";

export const QueryCategorySchema = PaginationQuerySchema;

export type QueryCategorySchemaType = z.infer<typeof QueryCategorySchema>;
