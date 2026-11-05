import type { DashboardOverviewSchemaReturnType } from "@starter/shared";
import { useQuery } from "@tanstack/react-query";

import AxiosInstance from "@/lib/axios";

export default function useDashboardOverview() {
  return useQuery({
    queryKey: ["product-dashboard-overview"],

    queryFn: async () => {
      const response =
        await AxiosInstance.get<DashboardOverviewSchemaReturnType>(
          "/product/overview",
          {},
        );

      return response.data;
    },
  });
}
