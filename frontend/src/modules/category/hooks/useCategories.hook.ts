import type { FindAllCategorySchemaReturnType } from "@starter/shared";
import { useQuery } from "@tanstack/react-query";

import AxiosInstance from "@/lib/axios";

export default function useCategories(page?: number) {
  return useQuery({
    queryKey: ["categories", page],

    queryFn: async () => {
      const response = await AxiosInstance.get<FindAllCategorySchemaReturnType>(
        "/category",
        {
          params: { page },
        },
      );

      return response.data;
    },
  });
}
