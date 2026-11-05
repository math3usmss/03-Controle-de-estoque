import type { FindAllProductSchemaReturnType } from "@starter/shared";
import { useQuery } from "@tanstack/react-query";

import AxiosInstance from "@/lib/axios";

export default function useProducts(page: number) {
  return useQuery({
    queryKey: ["products", page],

    queryFn: async () => {
      const response = await AxiosInstance.get<FindAllProductSchemaReturnType>(
        "/product",
        {
          params: { page },
        },
      );

      return response.data;
    },
  });
}
