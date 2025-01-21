import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StockData, SortDirection, SortField } from "@/types/stock";
import { ArrowUpDown } from "lucide-react";

interface StockTableProps {
  data: StockData[];
}

const StockTable = ({ data }: StockTableProps) => {
  const [sortField, setSortField] = useState<SortField>("ticker");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    }
    
    return sortDirection === "asc"
      ? String(aValue).localeCompare(String(bValue))
      : String(bValue).localeCompare(String(aValue));
  });

  const formatValue = (value: number | string, field: SortField) => {
    if (typeof value === "number") {
      if (field === "marketCap") return `$${(value / 1e9).toFixed(2)}B`;
      if (field === "price") return `$${value.toFixed(2)}`;
      if (field === "dividendYield") return `${(value * 100).toFixed(2)}%`;
      if (field === "peRatio" || field === "beta") return value.toFixed(2);
      if (field === "volume") return value.toLocaleString();
    }
    return value;
  };

  // Filter out internal database columns
  const visibleColumns = Object.keys(sortedData[0] || {}).filter(
    (key) => !["id", "created_at", "updated_at"].includes(key)
  );

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {visibleColumns.map((key) => (
              <TableHead
                key={key}
                className="cursor-pointer"
                onClick={() => handleSort(key as SortField)}
              >
                <div className="flex items-center space-x-1">
                  <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((stock) => (
            <TableRow key={stock.ticker}>
              {visibleColumns.map((key) => (
                <TableCell key={`${stock.ticker}-${key}`}>
                  {formatValue(stock[key as keyof StockData], key as SortField)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StockTable;