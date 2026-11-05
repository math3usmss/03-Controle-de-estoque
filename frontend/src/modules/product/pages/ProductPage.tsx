"use client";

import { useState } from "react";

import { DialogCreateProduct, ListProducts } from "../components";

export default function ProductPage() {
  const [page, setPage] = useState(1);

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Produtos</h1>

        <DialogCreateProduct />
      </div>

      <ListProducts page={page} setPage={setPage} />
    </section>
  );
}
