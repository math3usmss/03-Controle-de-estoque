"use client";

import { useState } from "react";

import { DialogCreateCategory, ListCategories } from "../components";

export default function CategoryPage() {
  const [page, setPage] = useState(1);

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Categorias</h1>

        <DialogCreateCategory />
      </div>

      <ListCategories page={page} setPage={setPage} />
    </section>
  );
}
