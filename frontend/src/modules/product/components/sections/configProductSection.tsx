"use client";

import { Package } from "lucide-react";
import { useState } from "react";

import { CreateProduct, ListProducts } from "..";

export default function ConfigProductSection() {
  const [page, setPage] = useState(1);

  return (
    <section className="flex w-full flex-1 flex-col gap-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight">
          Configurações de Produtos
        </h2>

        <p className="text-muted-foreground text-sm">
          Cadastre novos produtos e acompanhe os itens do estoque.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-6">
        <div className="min-w-0 lg:col-span-2">
          <CreateProduct />
        </div>

        <div className="bg-card border-border min-w-0 rounded-xl border p-5 shadow-sm lg:col-span-4">
          <div className="mb-5 flex items-center gap-3">
            <div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-lg">
              <Package className="size-5" />
            </div>

            <div>
              <h3 className="font-semibold">Produtos cadastrados</h3>

              <p className="text-muted-foreground text-xs">
                Visualize os produtos adicionados.
              </p>
            </div>
          </div>

          <div className="border-border border-t pt-4">
            <ListProducts page={page} setPage={setPage} />
          </div>
        </div>
      </div>
    </section>
  );
}
