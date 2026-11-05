"use client";

export type ConfigTab = "category" | "product";
import { useState } from "react";

import { Button } from "@/components/ui";
import { ConfigCategorySection } from "@/modules/category/components/sections";
import { ConfigProductSection } from "@/modules/product/components/sections";

export default function ConfigTabs() {
  const [activeTab, setActiveTab] = useState<ConfigTab>("product");
  return (
    <div className="flex w-full flex-1 flex-col gap-6">
      <div className="flex gap-3">
        <Button
          variant={activeTab === "product" ? "default" : "outline"}
          onClick={() => setActiveTab("product")}
          className="flex-1"
        >
          Produto
        </Button>
        <Button
          variant={activeTab === "category" ? "default" : "outline"}
          onClick={() => setActiveTab("category")}
          className="flex-1"
        >
          Categoria
        </Button>
      </div>

      {activeTab === "category" && <ConfigCategorySection />}
      {activeTab === "product" && <ConfigProductSection />}
    </div>
  );
}
