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
import { ArrowUpDown, ExternalLink } from "lucide-react";

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

  const getGoogleFinanceUrl = (ticker: string) => {
    const cleanTicker = ticker.trim();
    let formattedTicker = cleanTicker;
    let exchange = 'NYSE';  // Default to NYSE
    
    // Handle special cases for different exchanges
    if (cleanTicker.includes('.L')) {
      formattedTicker = cleanTicker.replace('.L', '');
      exchange = 'LON';
    } else if (cleanTicker.includes('.PA')) {
      formattedTicker = cleanTicker.replace('.PA', '');
      exchange = 'EPA';
    } else if (cleanTicker.includes('.SW')) {
      formattedTicker = cleanTicker.replace('.SW', '');
      exchange = 'SWX';
    } else if (cleanTicker.includes('.AX')) {
      formattedTicker = cleanTicker.replace('.AX', '');
      exchange = 'ASX';
    } else if (cleanTicker.includes('.HK')) {
      formattedTicker = cleanTicker.replace('.HK', '');
      exchange = 'HKG';
    } else {
      // For US markets, determine the exchange
      exchange = cleanTicker === 'JAAA' ? 'AMEX' :
                cleanTicker.includes('CG') || cleanTicker.includes('TPG') ? 'NASDAQ' : 
                'NYSE';
    }
    
    return `https://www.google.com/finance/quote/${formattedTicker}:${exchange}`;
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
      if (field === "market_cap") return `$${(value / 1e9).toFixed(2)}B`;
      if (field === "price") return `$${value.toFixed(2)}`;
      if (field === "dividend_yield") return `${(value * 100).toFixed(2)}%`;
      if (field === "pe_ratio" || field === "beta") return value.toFixed(2);
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
                  <span>{key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
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
                  {key === "ticker" ? (
                    <a 
                      href={getGoogleFinanceUrl(stock.ticker)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1"
                    >
                      {stock.ticker}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    formatValue(stock[key as keyof StockData], key as SortField)
                  )}
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