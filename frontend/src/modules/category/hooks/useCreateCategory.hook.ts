import {
  type CreateCategorySchemaReturnType,
  type CreateCategorySchemaType,
} from "@starter/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import AxiosInstance from "@/lib/axios";

export default function useCreateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createCategory"],

    mutationFn: async (categoryData: CreateCategorySchemaType) => {
      const response = await AxiosInstance.post<CreateCategorySchemaReturnType>(
        "/category",
        categoryData,
      );

      return response.data;
    },

    onSuccess: async () => {
      toast.success("Categoria criada com sucesso");

      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ["categories"],
        }),
        queryClient.invalidateQueries({
          queryKey: ["category"],
        }),
      ]);
    },

    onError: (error) => {
      toast.error("Falha ao criar categoria");
      console.error("Falha ao criar categoria:", error);
    },
  });
}
