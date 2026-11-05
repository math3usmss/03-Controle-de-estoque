import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import AxiosInstance from "@/lib/axios";

export default function useDeleteProduct(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteProduct", id],

    mutationFn: async () => {
      await AxiosInstance.delete(`/product/${id}`);
    },

    onSuccess: async () => {
      toast.success("Produto deletado com sucesso");

      await queryClient.invalidateQueries({
        queryKey: ["products"],
      });

      queryClient.removeQueries({
        queryKey: ["product", id],
      });
    },

    onError: (error) => {
      toast.error("Falha ao deletar produto");
      console.error("Falha ao deletar produto:", error);
    },
  });
}
