"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateProductSchema,
  type CreateProductSchemaType,
} from "@starter/shared";
import { Loader2, PackagePlus, Plus } from "lucide-react";
import { useForm } from "react-hook-form";

import { FieldFormCurrency, FieldFormNumber } from "@/components/common";
import FieldForm from "@/components/common/formLabelInput";
import { Button, Label, Textarea } from "@/components/ui";
import { useCategories } from "@/modules/category/hooks";

import { useCreateProduct } from "../../hooks";

export default function CreateProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateProductSchemaType>({
    resolver: zodResolver(CreateProductSchema),
  });

  const { mutate, isPending } = useCreateProduct();
  const { data: categories } = useCategories();

  const onSubmit = (data: CreateProductSchemaType) => {
    mutate(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-card border-border flex w-full max-w-xl flex-col gap-6 rounded-xl border p-6 shadow-sm"
    >
      {/* Cabeçalho */}
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 text-primary flex size-12 shrink-0 items-center justify-center rounded-xl">
          <PackagePlus className="size-6" />
        </div>

        <div className="space-y-1">
          <h2 className="text-lg font-semibold tracking-tight">Novo produto</h2>

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
          <Label className="text-lg font-semibold">Descrição do Produto</Label>

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
              setValueAs: (value: string) => {
                if (!value) return undefined;
                const digits = value.replace(/\D/g, "");
                return Number(digits) / 100;
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

        <Button type="submit" disabled={isPending} className="min-w-40 gap-2">
          {isPending ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Cadastrando...
            </>
          ) : (
            <>
              <Plus className="size-4" />
              Cadastrar produto
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
