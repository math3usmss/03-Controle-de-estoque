import type { DashboardOverviewSchemaReturnType } from "@starter/shared";
import { AlertTriangle, Boxes, Package, Wallet } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardStatsProps {
  summary: DashboardOverviewSchemaReturnType["summary"];
}

export default function DashboardStats({ summary }: DashboardStatsProps) {
  const stats = [
    {
      title: "Produtos cadastrados",
      value: summary.totalProducts.toLocaleString("pt-BR"),
      icon: Package,
    },
    {
      title: "Valor em estoque",
      value: summary.totalStockValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }),
      icon: Wallet,
    },
    {
      title: "Unidades em estoque",
      value: summary.totalUnits.toLocaleString("pt-BR"),
      icon: Boxes,
    },
    {
      title: "Produtos sem estoque",
      value: summary.outOfStock.toLocaleString("pt-BR"),
      icon: AlertTriangle,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <Icon className="text-muted-foreground size-5" />
            </CardHeader>

            <CardContent>
              <p className="text-2xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
