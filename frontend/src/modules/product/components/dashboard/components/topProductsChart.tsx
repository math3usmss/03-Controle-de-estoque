"use client";

import type { DashboardOverviewSchemaReturnType } from "@starter/shared";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TopProductsChartProps {
  products: DashboardOverviewSchemaReturnType["topProductsByValue"];
}

export default function TopProductsChart({ products }: TopProductsChartProps) {
  const currency = (value: number) =>
    value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Produtos com maior valor</CardTitle>
        <CardDescription>Top 10 produtos por valor em estoque</CardDescription>
      </CardHeader>

      <CardContent>
        {products.length === 0 ? (
          <p className="text-muted-foreground py-12 text-center text-sm">
            Nenhum produto cadastrado.
          </p>
        ) : (
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={products}
                layout="vertical"
                margin={{ left: 10, right: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />

                <XAxis
                  type="number"
                  tickFormatter={(value: number) =>
                    `R$ ${value.toLocaleString("pt-BR")}`
                  }
                />

                <YAxis
                  type="category"
                  dataKey="name"
                  width={110}
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value: string) =>
                    value.length > 16 ? `${value.slice(0, 16)}...` : value
                  }
                />

                <Tooltip formatter={(value) => currency(Number(value))} />

                <Bar
                  dataKey="value"
                  name="Valor em estoque"
                  fill="var(--primary)"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
