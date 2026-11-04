"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateCategorySchema,
  type CreateCategorySchemaType,
} from "@starter/shared";
import { useState } from "react";
import { useForm } from "react-hook-form";

import FieldForm from "@/components/common/formLabelInput";
import { Button } from "@/components/ui";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";

import { useCreateCategory } from "../../hooks";

export default function DialogCreateCategory() {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateCategorySchemaType>({
    resolver: zodResolver(CreateCategorySchema),
  });

  const { mutate, isPending } = useCreateCategory();

  const onSubmit = (data: CreateCategorySchemaType) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        setOpen(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button className="bg-primary text-primary-foreground cursor-pointer">
            Cadastrar Categoria
          </Button>
        }
      ></DialogTrigger>

      <DialogContent className="bg-card max-w-md">
        <DialogHeader>
          <DialogTitle className="text-card-foreground text-2xl font-semibold">
            Cadastrar Categoria
          </DialogTitle>
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
            Criar Categoria
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
