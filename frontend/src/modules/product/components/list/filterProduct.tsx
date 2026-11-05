import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCategories } from "@/modules/category/hooks";

interface FilterProductProps {
  value: string;
  onChange: (value: string) => void;
}

export default function FilterProduct({ value, onChange }: FilterProductProps) {
  const { data: categories } = useCategories();

  const items = [
    { value: "all", label: "Todas as categorias" },
    { value: "uncategorized", label: "Sem categoria" },
    ...(categories?.categorys ?? []).map((category) => ({
      value: category.id,
      label: category.name,
    })),
  ];

  return (
    <Select
      items={items}
      value={value}
      onValueChange={(newValue) => onChange(newValue ?? "all")}
    >
      <SelectTrigger className="border-border w-full rounded-md border py-5 sm:w-52">
        <SelectValue placeholder="Todas as categorias" />
      </SelectTrigger>

      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
