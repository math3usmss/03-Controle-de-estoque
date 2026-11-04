"use client";
import { useState } from "react";

import {
  DialogCreateCategory,
  ListCategories,
} from "@/modules/category/components";

export default function ConfigCategorySection() {
  const [page, setPage] = useState(1);
  return (
    <div className="flex w-full flex-1 flex-col gap-3">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-2xl font-bold">Configurações de Categoria</h2>
        <DialogCreateCategory />
      </div>
      <ListCategories page={page} setPage={setPage} />
    </div>
  );
}
