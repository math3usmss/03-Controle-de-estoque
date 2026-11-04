import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import AxiosInstance from "@/lib/axios";

export default function useDeleteCategory(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteCategory", id],

    mutationFn: async () => {
      await AxiosInstance.delete(`/category/${id}`);
    },

    onSuccess: async () => {
      toast.success("Categoria deletada com sucesso");

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
      toast.error("Falha ao deletar categoria");
      console.error("Falha ao deletar categoria:", error);
    },
  });
}
