import type { ComponentProps } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

import { Input, Label } from "@/components/ui";

interface FieldFormProps extends Omit<ComponentProps<typeof Input>, "name"> {
  label: string;
  register: UseFormRegisterReturn;
  error?: string;
  className?: string;
}

export default function FieldForm({
  label,
  register,
  error,
  id,
  className,
  ...props
}: FieldFormProps) {
  const inputId = id ?? register.name;

  return (
    <div className={`space-y-1 ${className}`}>
      <Label htmlFor={inputId} className="text-lg font-semibold">
        {label}
      </Label>

      <Input
        id={inputId}
        {...register}
        {...props}
        aria-invalid={!!error}
        className="border-border w-full border py-4"
      />

      {error && <p className="text-destructive text-sm">{error}</p>}
    </div>
  );
}
