"use client";

import { ConfigTabs } from "@/modules/config/components";

export default function ConfigPage() {
  return (
    <div className="flex flex-col gap-6">
      <ConfigTabs />
    </div>
  );
}
