import { z } from "zod";

import { PaginationQuerySchema } from "../../common/paginationQuery.schema";

export const QueryProductSchema = PaginationQuerySchema;

export type QueryProductSchemaType = z.infer<typeof QueryProductSchema>;
