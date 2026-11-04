"use client";

import type { FindByIdCategorySchemaReturnType } from "@starter/shared";
import { useState } from "react";

import { MenuList } from "@/components/common";

import { ButtonDeleteCategory, DialogEditCategory } from "..";

interface ListItemCategoryProps {
  category: FindByIdCategorySchemaReturnType;
}

export default function ListItemCategory({ category }: ListItemCategoryProps) {
  const [onEdit, setOnEdit] = useState(false);
  return (
    <li className="group bg-card hover:bg-muted/40 relative flex items-center gap-3 overflow-hidden rounded-lg border p-4 transition-colors">
      {/* Indicador de cor */}
      <div
        className="absolute inset-y-3 left-0 w-1 rounded-r-full"
        style={{ backgroundColor: category.color }}
      />

      {/* Informações */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold">{category.name}</h3>
      </div>

      <MenuList
        onEdit={() => setOnEdit(true)}
        deleteComponent={<ButtonDeleteCategory id={category.id} />}
        editComponent={
          <DialogEditCategory
            id={category.id}
            onOpen={onEdit}
            setOpen={setOnEdit}
          />
        }
      />
    </li>
  );
}
