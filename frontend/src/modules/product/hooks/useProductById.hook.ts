import type { FindByIdProductSchemaReturnType } from "@starter/shared";
import { useQuery } from "@tanstack/react-query";

import AxiosInstance from "@/lib/axios";

export default function useProductById(id: string) {
  return useQuery({
    queryKey: ["product", id],

    queryFn: async () => {
      const response = await AxiosInstance.get<FindByIdProductSchemaReturnType>(
        `/product/${id}`,
      );

      return response.data;
    },

    enabled: !!id,
  });
}
