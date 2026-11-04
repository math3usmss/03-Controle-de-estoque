"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  UpdateCategorySchema,
  type UpdateCategorySchemaType,
} from "@starter/shared";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import FieldForm from "@/components/common/formLabelInput";
import { Button } from "@/components/ui";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui";

import { useCategoryById, useUpdateCategory } from "../../hooks";

interface DialogEditCategoryProps {
  id: string;
  onOpen: boolean;
  setOpen: (value: boolean) => void;
}

export default function DialogEditCategory({
  id,
  onOpen,
  setOpen,
}: DialogEditCategoryProps) {
  const { data: category } = useCategoryById(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateCategorySchemaType>({
    resolver: zodResolver(UpdateCategorySchema),
  });

  useEffect(() => {
    if (!category) return;

    reset({
      ...category,
    });
  }, [category, reset]);

  const { mutate, isPending } = useUpdateCategory(id);

  const onSubmit = (data: UpdateCategorySchemaType) => {
    mutate(data, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Dialog open={onOpen} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Categoria </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-3"
        >
          <FieldForm
            label="Nome da Categoria"
            register={register("name")}
            error={errors.name?.message}
          />

          <FieldForm
            label="Cor da Categoria"
            register={register("color")}
            error={errors.color?.message}
            type="color"
          />

          <Button type="submit" disabled={isPending}>
            Editar Categoria
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
