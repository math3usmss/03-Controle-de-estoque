"use client";

import type { FindByIdProductSchemaReturnType } from "@starter/shared";
import { Package } from "lucide-react";
import { useState } from "react";

import { MenuList } from "@/components/common";

import { DialogEditProduct } from "..";
import { ButtonDeleteProduct } from "../features";
import StockQuantityInput from "../features/stockQuantityInput";

interface ListItemProductProps {
  product: FindByIdProductSchemaReturnType;
}

export default function ListItemProduct({ product }: ListItemProductProps) {
  const [onEdit, setOnEdit] = useState(false);
  const price = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(product.price));

  return (
    <li className="bg-card border-border hover:bg-muted/40 flex items-center gap-4 rounded-lg border p-4 transition-colors">
      <div className="bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded-lg">
        <Package className="size-5" />
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <div className="flex flex-1 items-center justify-between gap-2">
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <div className="space-y-1">
              <h3 className="truncate text-sm font-semibold">{product.name}</h3>

              {product.description && (
                <p className="text-muted-foreground truncate text-xs">
                  {product.description}
                </p>
              )}

              <p className="text-muted-foreground truncate text-xs">
                Categoria: {product.category?.name ?? "Sem categoria"}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold">{price}</span>
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
        </div>

        <StockQuantityInput
          productId={product.id}
          quantity={product.quantity}
        />
      </div>
    </li>
  );
}
