"use client";

import { Package } from "lucide-react";

import { ListPagination } from "@/components/common";
import {
  EmptyState,
  ErrorState,
  LoadingState,
} from "@/components/common/states";

import { useProducts } from "../../hooks";
import { FilterProduct, ListItemProduct, SearchInput } from ".";

interface ListProductsProps {
  page: number;
  setPage: (page: number) => void;
  search: string;
  setSearch: (search: string) => void;
  categoryId: string | "all";
  setCategoryId: (categoryId: string | "all") => void;
}

export default function ListProducts({
  page,
  setPage,
  search,
  setSearch,
  categoryId,
  setCategoryId,
}: ListProductsProps) {
  const { data, isLoading, isError } = useProducts(page, search, categoryId);

  const { products = [], limit, totalPages = 0, total = 0 } = data ?? {};

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
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

        <span className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-sm font-semibold">
          {total}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <SearchInput
          value={search}
          onChange={(value) => {
            setSearch(value);
            setPage(1);
          }}
          placeholder="Buscar produtos..."
        />
        <FilterProduct
          value={categoryId}
          onChange={(value) => {
            setCategoryId(value);
            setPage(1);
          }}
        />
      </div>

      {isLoading ? (
        <LoadingState items={5}>
          <div className="bg-muted h-16 animate-pulse rounded-md" />
        </LoadingState>
      ) : isError ? (
        <ErrorState title="Erro ao carregar produtos." />
      ) : products.length === 0 ? (
        <EmptyState title="Nenhum produto encontrado." />
      ) : (
        <>
          <ul className="flex flex-col gap-3">
            {products.map((product) => (
              <ListItemProduct key={product.id} product={product} />
            ))}
          </ul>

          {totalPages > 1 && (
            <div className="mt-3 flex justify-end">
              <ListPagination
                page={page}
                setPage={setPage}
                totalPages={totalPages}
                limit={limit}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
