"use client";

import type { FindByIdProductSchemaReturnType } from "@starter/shared";
import { Package } from "lucide-react";
import { useState } from "react";

import { MenuList } from "@/components/common";

import { DialogEditProduct } from "..";
import { ButtonDeleteProduct } from "../features";

interface ListItemProductProps {
  product: FindByIdProductSchemaReturnType;
}

export default function ListItemProduct({ product }: ListItemProductProps) {
  const [onEdit, setOnEdit] = useState(false);
  const price = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(product.price));

  const stockStatus =
    product.quantity === 0
      ? {
          label: "Sem estoque",
          className: "bg-red-500/10 text-red-600 dark:text-red-400",
        }
      : product.quantity <= 10
        ? {
            label: `${product.quantity} unidades`,
            className: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
          }
        : {
            label: `${product.quantity} unidades`,
            className:
              "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
          };

  return (
    <li className="bg-card border-border hover:bg-muted/40 flex items-center gap-4 rounded-lg border p-4 transition-colors">
      <div className="bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded-lg">
        <Package className="size-5" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="space-y-1">
          <h3 className="truncate text-sm font-semibold">{product.name}</h3>

          {product.description && (
            <p className="text-muted-foreground truncate text-xs">
              {product.description}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold">{price}</span>

          <span
            className={`rounded-md px-2 py-1 text-xs font-medium ${stockStatus.className}`}
          >
            {stockStatus.label}
          </span>
        </div>
      </div>

      <MenuList
        onEdit={() => setOnEdit(true)}
        deleteComponent={<ButtonDeleteProduct id={product.id} />}
        editComponent={
          <DialogEditProduct
            id={product.id}
            onOpen={onEdit}
            setOpen={setOnEdit}
          />
        }
      />
    </li>
  );
}
