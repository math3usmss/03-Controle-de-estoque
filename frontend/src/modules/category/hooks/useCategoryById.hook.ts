import type { FindByIdCategorySchemaReturnType } from "@starter/shared";
import { useQuery } from "@tanstack/react-query";

import AxiosInstance from "@/lib/axios";

export default function useCategoryById(id: string) {
  return useQuery({
    queryKey: ["category", id],

    queryFn: async () => {
      const response =
        await AxiosInstance.get<FindByIdCategorySchemaReturnType>(
          `/category/${id}`,
        );

      return response.data;
    },

    enabled: !!id,
  });
}
