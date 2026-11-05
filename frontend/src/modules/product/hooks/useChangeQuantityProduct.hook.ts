import { type UpdateProductSchemaReturnType } from "@starter/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import AxiosInstance from "@/lib/axios";

export default function useChangeQuantityProduct(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["changeQuantityProduct", id],

    mutationFn: async (productData: { quantity: number }) => {
      const response = await AxiosInstance.patch<UpdateProductSchemaReturnType>(
        `/product/${id}/quantity`,
        productData,
      );

      return response.data;
    },

    onSuccess: async () => {
      toast.success("Quantidade do produto atualizada com sucesso");

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
      toast.error("Falha ao atualizar quantidade do produto");
      console.error("Falha ao atualizar quantidade do produto:", error);
    },
  });
}
