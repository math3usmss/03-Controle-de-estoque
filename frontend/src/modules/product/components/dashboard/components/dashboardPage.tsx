"use client";

import { Loader } from "lucide-react";
import Link from "next/link";

import { ErrorState } from "@/components/common";
import { useDashboardOverview } from "@/modules/product/hooks";

import {
  DashboardStats,
  ProductsByCategoryChart,
  StockByCategoryChart,
  TopProductsChart,
} from ".";

export default function DashboardPage() {
  const { data, isLoading, isError } = useDashboardOverview();

  if (isLoading) {
    return (
      <div className="text-muted-foreground flex items-center justify-center p-6">
        <Loader className="animate-spin" />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <ErrorState
        title="Erro ao carregar o dashboard"
        description="Ocorreu um erro ao tentar carregar os dados do dashboard."
      />
    );
  }

  return (
    <main className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground text-sm">
            Visão geral do seu estoque.
          </p>
        </div>
        <Link
          href="/config"
          className="bg-primary text-primary-foreground rounded-md px-2 py-1"
        >
          Configurações
        </Link>
      </div>

      <DashboardStats summary={data.summary} />

      <div className="grid gap-6 lg:grid-cols-2">
        <TopProductsChart products={data.topProductsByValue} />

        <ProductsByCategoryChart categories={data.productsByCategory} />
      </div>

      <StockByCategoryChart categories={data.stockByCategory} />
    </main>
  );
}
