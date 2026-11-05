"use client";

import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button, Input } from "@/components/ui";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  debounce?: number;
  disabled?: boolean;
  className?: string;
}

export default function SearchInput({
  value,
  onChange,
  placeholder = "Pesquisar...",
  debounce = 400,
  disabled = false,
  className,
}: SearchInputProps) {
  const [search, setSearch] = useState(value);

  useEffect(() => {
    if (search === value) return;

    const timeout = setTimeout(() => {
      onChange(search.trim());
    }, debounce);

    return () => clearTimeout(timeout);
  }, [search, value, onChange, debounce]);

  return (
    <div
      className={cn(
        "border-border bg-card focus-within:ring-primary/20 flex h-11 w-full items-center gap-2 rounded-lg border px-3 transition-all focus-within:ring-2",
        className,
      )}
    >
      <Search className="text-muted-foreground size-4 shrink-0" />

      <Input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        aria-label={placeholder}
        className="h-full min-w-0 flex-1 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
      />

      {search && !disabled && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => {
            setSearch("");
            onChange("");
          }}
          aria-label="Limpar pesquisa"
          className="text-muted-foreground hover:text-foreground size-7 shrink-0 rounded-md"
        >
          <X className="size-4" />
        </Button>
      )}
    </div>
  );
}
