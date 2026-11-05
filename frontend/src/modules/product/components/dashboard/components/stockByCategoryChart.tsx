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

interface StockByCategoryChartProps {
  categories: DashboardOverviewSchemaReturnType["stockByCategory"];
}

export default function StockByCategoryChart({
  categories,
}: StockByCategoryChartProps) {
  const data = categories.filter((category) => category.quantity > 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Estoque por categoria</CardTitle>
        <CardDescription>
          Quantidade total de unidades disponíveis
        </CardDescription>
      </CardHeader>

      <CardContent>
        {data.length === 0 ? (
          <p className="text-muted-foreground py-12 text-center text-sm">
            Nenhuma unidade disponível.
          </p>
        ) : (
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />

                <XAxis dataKey="categoryName" tick={{ fontSize: 12 }} />

                <YAxis allowDecimals={false} />

                <Tooltip />

                <Bar
                  dataKey="quantity"
                  name="Unidades"
                  fill="var(--primary)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
