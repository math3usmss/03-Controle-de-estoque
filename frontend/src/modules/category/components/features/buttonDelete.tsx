"use client";

import ConfirmDeleteDialog from "@/components/common/ConfirmDeleteDialog";

import { useDeleteCategory } from "../../hooks";

interface ButtonDeleteCategoryProps {
  id: string;
}

export default function ButtonDeleteCategory({
  id,
}: ButtonDeleteCategoryProps) {
  const { mutateAsync: deleteCategory, isPending } = useDeleteCategory(id);

  return (
    <ConfirmDeleteDialog
      description="Esta ação não pode ser desfeita. Isso irá deletar permanentemente a Categoria."
      onConfirm={() => deleteCategory()}
      isPending={isPending}
    />
  );
}
