"use client";

import { ListPagination } from "@/components/common";
import {
  EmptyState,
  ErrorState,
  LoadingState,
} from "@/components/common/states";

import { useProducts } from "../../hooks";
import { ListItemProduct } from ".";

interface ListProductsProps {
  page: number;
  setPage: (page: number) => void;
}

export default function ListProducts({ page, setPage }: ListProductsProps) {
  const {
    data: { products, limit, totalPages } = {},
    isLoading,
    isError,
  } = useProducts(page);

  if (isLoading) {
    return (
      <LoadingState items={5}>
        <div className="bg-muted h-16 animate-pulse rounded-md" />
      </LoadingState>
    );
  }

  if (isError) {
    return <ErrorState title="Erro ao carregar produtos." />;
  }

  if (!products?.length) {
    return <EmptyState title="Nenhum produto encontrado." />;
  }

  return (
    <div className="w-full">
      <ul className="flex flex-col gap-3">
        {products.map((product) => (
          <ListItemProduct key={product.id} product={product} />
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
