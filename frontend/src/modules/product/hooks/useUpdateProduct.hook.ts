import {
  type UpdateProductSchemaReturnType,
  type UpdateProductSchemaType,
} from "@starter/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import AxiosInstance from "@/lib/axios";

export default function useUpdateProduct(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["updateProduct", id],

    mutationFn: async (productData: UpdateProductSchemaType) => {
      const response = await AxiosInstance.patch<UpdateProductSchemaReturnType>(
        `/product/${id}`,
        productData,
      );

      return response.data;
    },

    onSuccess: async () => {
      toast.success("Produto atualizada com sucesso");

      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ["products"],
        }),
        queryClient.invalidateQueries({
          queryKey: ["product", id],
        }),
      ]);
    },

    onError: (error) => {
      toast.error("Falha ao atualizar produto");
      console.error("Falha ao atualizar produto:", error);
    },
  });
}
