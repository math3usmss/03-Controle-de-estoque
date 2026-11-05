"use client";

import ConfirmDeleteDialog from "@/components/common/ConfirmDeleteDialog";

import { useDeleteProduct } from "../../hooks";

interface ButtonDeleteProductProps {
  id: string;
}

export default function ButtonDeleteProduct({ id }: ButtonDeleteProductProps) {
  const { mutateAsync: deleteProduct, isPending } = useDeleteProduct(id);

  return (
    <ConfirmDeleteDialog
      description="Esta ação não pode ser desfeita. Isso irá deletar permanentemente o produto."
      onConfirm={() => deleteProduct()}
      isPending={isPending}
    />
  );
}
