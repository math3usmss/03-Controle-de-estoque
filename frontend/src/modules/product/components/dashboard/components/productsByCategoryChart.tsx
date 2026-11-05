"use client";

import type { DashboardOverviewSchemaReturnType } from "@starter/shared";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProductsByCategoryChartProps {
  categories: DashboardOverviewSchemaReturnType["productsByCategory"];
}

const COLORS = [
  "#6366f1",
  "#22c55e",
  "#f59e0b",
  "#06b6d4",
  "#ec4899",
  "#8b5cf6",
];

export default function ProductsByCategoryChart({
  categories,
}: ProductsByCategoryChartProps) {
  const data = categories.filter((category) => category.count > 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Produtos por categoria</CardTitle>
        <CardDescription>Distribuição dos produtos cadastrados</CardDescription>
      </CardHeader>

      <CardContent>
        {data.length === 0 ? (
          <p className="text-muted-foreground py-12 text-center text-sm">
            Nenhum produto cadastrado.
          </p>
        ) : (
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="count"
                  nameKey="categoryName"
                  cx="50%"
                  cy="45%"
                  innerRadius={65}
                  outerRadius={105}
                  paddingAngle={3}
                >
                  {data.map((category, index) => (
                    <Cell
                      key={category.categoryId ?? "uncategorized"}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
                <Legend verticalAlign="bottom" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
