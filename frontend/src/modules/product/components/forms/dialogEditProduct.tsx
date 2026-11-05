"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  UpdateProductSchema,
  type UpdateProductSchemaType,
} from "@starter/shared";
import { Loader2, PackagePlus, Plus } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { FieldFormCurrency, FieldFormNumber } from "@/components/common";
import FieldForm from "@/components/common/formLabelInput";
import { Button, Label, Textarea } from "@/components/ui";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui";
import { useCategories } from "@/modules/category/hooks";

import { useProductById, useUpdateProduct } from "../../hooks";

interface DialogEditProductProps {
  id: string;
  onOpen: boolean;
  setOpen: (open: boolean) => void;
}

export default function DialogEditProduct({
  id,
  onOpen,
  setOpen,
}: DialogEditProductProps) {
  const { data: product } = useProductById(id);
  const { data: categories } = useCategories();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateProductSchemaType>({
    resolver: zodResolver(UpdateProductSchema),
    defaultValues: {
      name: product?.name,
      description: product?.description ?? "",
      price: product?.price,
      quantity: product?.quantity,
    },
  });

  useEffect(() => {
    if (!product) return;

    reset({
      ...product,
    });
  }, [product, reset]);

  const { mutate, isPending } = useUpdateProduct(id);

  const onSubmit = (data: UpdateProductSchemaType) => {
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
          <DialogTitle>Editar Produto</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-3"
        >
          {/* Cabeçalho */}
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 text-primary flex size-12 shrink-0 items-center justify-center rounded-xl">
              <PackagePlus className="size-6" />
            </div>

            <div className="space-y-1">
              <h2 className="text-lg font-semibold tracking-tight">
                Novo produto
              </h2>

              <p className="text-muted-foreground text-sm">
                Preencha os dados para adicionar um produto.
              </p>
            </div>
          </div>

          <div className="border-border border-t" />

          {/* Campos */}
          <div className="space-y-5">
            <FieldForm
              label="Nome do Produto"
              register={register("name")}
              error={errors.name?.message}
            />

            <div className={`space-y-1`}>
              <Label className="text-lg font-semibold">
                Descrição do Produto
              </Label>

              <Textarea
                id="description"
                {...register("description")}
                aria-invalid={!!errors.description?.message}
                className="border-border w-full resize-none border py-4"
              />

              {errors.description?.message && (
                <p className="text-destructive text-sm">
                  {errors.description?.message}
                </p>
              )}
            </div>

            <div className="flex w-full items-center gap-4">
              <FieldFormCurrency
                label="Preço (R$)"
                register={register("price", {
                  setValueAs: (value: string | number) => {
                    if (value === "" || value == null) return undefined;
                    if (typeof value === "number") return value;
                    const digits = value.replace(/\D/g, "");
                    return digits ? Number(digits) / 100 : undefined;
                  },
                })}
                error={errors.price?.message}
                className="flex-1"
              />

              <FieldFormNumber
                label="Quantidade inicial"
                register={register("quantity", {
                  setValueAs: (value: string) =>
                    value === "" ? undefined : Number(value),
                })}
                error={errors.quantity?.message}
                className="flex-1"
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label className="text-lg font-semibold">Categoria</Label>

            <select
              {...register("categoryId", {
                setValueAs: (value) => (value === "" ? null : value),
              })}
              aria-invalid={!!errors.categoryId}
              className="border-border w-full rounded-xl border px-2 py-4"
            >
              <option value="">Sem categoria</option>

              {categories?.categorys?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            {errors.categoryId?.message && (
              <p className="text-destructive text-sm">
                {errors.categoryId?.message}
              </p>
            )}
          </div>

          {/* Rodapé */}
          <div className="border-border flex items-center justify-end gap-3 border-t pt-5">
            <Button
              type="button"
              variant="outline"
              disabled={isPending}
              onClick={() => reset()}
            >
              Limpar
            </Button>

            <Button
              type="submit"
              disabled={isPending}
              className="min-w-40 gap-2"
            >
              {isPending ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Atualizando...
                </>
              ) : (
                <>
                  <Plus className="size-4" />
                  Atualizar produto
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
