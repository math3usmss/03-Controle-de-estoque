"use client";

import { ThemeProvider } from "@teispace/next-themes";
import { Toaster } from "sonner";

import QueryProviders from "./QueryProviders";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <QueryProviders>
          {children}
          <Toaster />
        </QueryProviders>
      </ThemeProvider>
    </>
  );
}
