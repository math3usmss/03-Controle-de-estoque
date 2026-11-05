import type { ChangeEvent, ComponentProps } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

import { Input, Label } from "@/components/ui";

interface FieldFormCurrencyProps extends Omit<
  ComponentProps<typeof Input>,
  "name" | "type" | "onChange"
> {
  label: string;
  register: UseFormRegisterReturn;
  error?: string;
}

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export default function FieldFormCurrency({
  label,
  register,
  error,
  id,
  className,
  ...props
}: FieldFormCurrencyProps) {
  const inputId = id ?? register.name;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const digits = event.target.value.replace(/\D/g, "");

    const value = Number(digits) / 100;

    event.target.value = currencyFormatter.format(value);

    register.onChange(event);
  }

  return (
    <div className={`space-y-1 ${className}`}>
      <Label htmlFor={inputId} className="text-lg font-semibold">
        {label}
      </Label>

      <Input
        id={inputId}
        type="text"
        inputMode="numeric"
        placeholder="R$ 0,00"
        {...register}
        {...props}
        onChange={handleChange}
        aria-invalid={!!error}
        className={`border-border } w-full border py-4`}
      />

      {error && <p className="text-destructive text-sm">{error}</p>}
    </div>
  );
}
