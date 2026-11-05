"use client";

import { Check, Loader2, Minus, Package, Plus } from "lucide-react";
import { useState } from "react";

import { Button, Input } from "@/components/ui";
import { cn } from "@/lib/utils";

import { useChangeQuantityProduct } from "../../hooks";

interface StockQuantityInputProps {
  productId: string;
  quantity: number;
  disabled?: boolean;
  min?: number;
  max?: number;
}

export default function StockQuantityInput({
  productId,
  quantity,
  disabled = false,
  min = 0,
  max,
}: StockQuantityInputProps) {
  const [value, setValue] = useState(String(quantity));

  const { mutate, isPending } = useChangeQuantityProduct(productId);

  const currentValue = value === "" ? null : Number(value);

  const hasChanges = currentValue !== null && currentValue !== quantity;

  const isValid =
    currentValue !== null &&
    Number.isSafeInteger(currentValue) &&
    currentValue >= min &&
    (max === undefined || currentValue <= max);

  const isDisabled = disabled || isPending;

  const decrease = () => {
    setValue(String(Math.max(min, (currentValue ?? min) - 1)));
  };

  const increase = () => {
    setValue(
      String(
        Math.min(max ?? Number.MAX_SAFE_INTEGER, (currentValue ?? min) + 1),
      ),
    );
  };

  const handleChange = (input: string) => {
    setValue(input.replace(/\D/g, ""));
  };

  const handleSave = () => {
    if (!hasChanges || !isValid || isDisabled) return;

    mutate({
      quantity: currentValue,
    });
  };

  const stockStatus =
    currentValue === 0
      ? {
          label: "Esgotado",
          className: "bg-red-500/10 text-red-600",
        }
      : currentValue !== null && currentValue <= 10
        ? {
            label: "Estoque baixo",
            className: "bg-amber-500/10 text-amber-600",
          }
        : {
            label: "Disponível",
            className: "bg-emerald-500/10 text-emerald-600",
          };

  return (
    <div className="bg-card border-border w-full space-y-3 rounded-xl border p-4">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between gap-2">
        <div className="text-muted-foreground flex items-center gap-2">
          <Package className="size-4" />

          <span className="text-sm font-medium">Estoque disponível</span>
        </div>

        <span
          className={cn(
            "rounded-md px-2 py-1 text-[11px] font-medium",
            stockStatus.className,
          )}
        >
          {stockStatus.label}
        </span>
      </div>

      {/* Controle de quantidade */}
      <div className="flex items-center gap-2">
        <div className="border-border bg-background flex min-w-0 flex-1 items-center rounded-lg border p-1">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            disabled={isDisabled || (currentValue ?? min) <= min}
            onClick={decrease}
            aria-label="Diminuir quantidade"
            className="size-9 shrink-0 rounded-md"
          >
            <Minus className="size-4" />
          </Button>

          <Input
            type="text"
            inputMode="numeric"
            value={value}
            disabled={isDisabled}
            onChange={(e) => handleChange(e.target.value)}
            aria-label="Quantidade em estoque"
            className="h-9 min-w-0 flex-1 border-0 bg-transparent px-1 text-center text-base font-semibold shadow-none focus-visible:ring-0"
          />

          <Button
            type="button"
            variant="ghost"
            size="icon"
            disabled={
              isDisabled || (max !== undefined && (currentValue ?? min) >= max)
            }
            onClick={increase}
            aria-label="Aumentar quantidade"
            className="size-9 shrink-0 rounded-md"
          >
            <Plus className="size-4" />
          </Button>
        </div>

        {/* Salvar */}
        {hasChanges && (
          <Button
            type="button"
            disabled={isDisabled || !isValid}
            onClick={handleSave}
            className="h-11 shrink-0 gap-2 rounded-lg px-4"
          >
            {isPending ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Check className="size-4" />
            )}
            Salvar
          </Button>
        )}
      </div>

      {/* Feedback */}
      {hasChanges && (
        <p className="text-muted-foreground text-xs">
          Alteração ainda não salva
        </p>
      )}

      {!isValid && (
        <p className="text-destructive text-xs">
          Informe uma quantidade válida.
        </p>
      )}
    </div>
  );
}
