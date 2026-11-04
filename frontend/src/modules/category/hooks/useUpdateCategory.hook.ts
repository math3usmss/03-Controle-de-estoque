import {
  type UpdateCategorySchemaReturnType,
  type UpdateCategorySchemaType,
} from "@starter/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import AxiosInstance from "@/lib/axios";

export default function useUpdateCategory(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["updateCategory", id],

    mutationFn: async (categoryData: UpdateCategorySchemaType) => {
      const response =
        await AxiosInstance.patch<UpdateCategorySchemaReturnType>(
          `/category/${id}`,
          categoryData,
        );

      return response.data;
    },

    onSuccess: async () => {
      toast.success("Categoria atualizada com sucesso");

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
      toast.error("Falha ao atualizar categoria");
      console.error("Falha ao atualizar categoria:", error);
    },
  });
}
