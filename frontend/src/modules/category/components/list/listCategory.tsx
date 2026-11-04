"use client";

import { ListPagination } from "@/components/common";
import {
  EmptyState,
  ErrorState,
  LoadingState,
} from "@/components/common/states";

import { useCategories } from "../../hooks";
import { ListItemCategory } from ".";

interface ListCategoriesProps {
  page: number;
  setPage: (page: number) => void;
}

export default function ListCategories({ page, setPage }: ListCategoriesProps) {
  const {
    data: { categorys, limit, totalPages } = {},
    isLoading,
    isError,
  } = useCategories(page);

  if (isLoading) {
    return (
      <LoadingState items={5}>
        <div className="bg-muted h-16 animate-pulse rounded-md" />
      </LoadingState>
    );
  }

  if (isError) {
    return <ErrorState title="Erro ao carregar Categorias." />;
  }

  if (!categorys?.length) {
    return <EmptyState title="Nenhuma categoria encontrada." />;
  }

  return (
    <div className="w-full">
      <ul className="flex flex-col gap-3">
        {categorys.map((category) => (
          <ListItemCategory key={category.id} category={category} />
        ))}
      </ul>

      {totalPages && totalPages > 1 && (
        <div className="mt-3 flex justify-end">
          <ListPagination
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            limit={limit}
          />
        </div>
      )}
    </div>
  );
}
