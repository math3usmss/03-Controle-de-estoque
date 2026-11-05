import {
  type CreateProductSchemaReturnType,
  type CreateProductSchemaType,
} from "@starter/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import AxiosInstance from "@/lib/axios";

export default function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createProduct"],

    mutationFn: async (productData: CreateProductSchemaType) => {
      const response = await AxiosInstance.post<CreateProductSchemaReturnType>(
        "/product",
        productData,
      );

      return response.data;
    },

    onSuccess: async () => {
      toast.success("Produto criado com sucesso");

      await queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },

    onError: (error) => {
      toast.error("Falha ao criar produto");
      console.error("Falha ao criar produto:", error);
    },
  });
}
