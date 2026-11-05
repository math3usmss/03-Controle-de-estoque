"use client";

import Link from "next/link";
import { useState } from "react";

import { CreateProduct, ListProducts } from "..";

export default function ConfigProductSection() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [categoryId, setCategoryId] = useState<string | "all">("all");

  return (
    <section className="flex w-full flex-1 flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">
            Configurações de Produtos
          </h2>

          <p className="text-muted-foreground text-sm">
            Cadastre novos produtos e acompanhe os itens do estoque.
          </p>
        </div>
        <Link
          href="/recharts"
          className="bg-primary text-primary-foreground rounded-md px-2 py-1"
        >
          Ver dashboard de gráficos
        </Link>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-6">
        <div className="min-w-0 lg:col-span-2">
          <CreateProduct />
        </div>

        <div className="bg-card border-border min-w-0 rounded-xl border p-5 shadow-sm lg:col-span-4">
          <ListProducts
            page={page}
            setPage={setPage}
            search={search}
            setSearch={setSearch}
            categoryId={categoryId}
            setCategoryId={setCategoryId}
          />
        </div>
      </div>
    </section>
  );
}
