import type { FindAllProductSchemaReturnType } from "@starter/shared";
import { useQuery } from "@tanstack/react-query";

import AxiosInstance from "@/lib/axios";

export default function useProducts(
  page: number,
  search: string,
  categoryId: string | "all",
) {
  return useQuery({
    queryKey: ["products", page, search, categoryId],

    queryFn: async () => {
      const response = await AxiosInstance.get<FindAllProductSchemaReturnType>(
        "/product",
        {
          params: {
            page,
            search: search || undefined,
            categoryId: categoryId === "all" ? undefined : categoryId,
          },
        },
      );

      return response.data;
    },
  });
}
