import { StockData } from "@/types/stock";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowDown, ArrowUp, TrendingUp } from "lucide-react";

interface SingleStockViewProps {
  stock: StockData;
}

const SingleStockView = ({ stock }: SingleStockViewProps) => {
  const formatLargeNumber = (num: number) => {
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    return `$${num.toFixed(2)}`;
  };

  const getBetaDescription = (beta: number) => {
    if (beta > 1.5) return "Highly volatile compared to market";
    if (beta > 1) return "More volatile than market";
    if (beta < 0.5) return "Much less volatile than market";
    return "Less volatile than market";
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Overview
          </CardTitle>
          <CardDescription>Key metrics for {stock.name}</CardDescription>
        </CardHeader>
        <CardContent>
          <dl className="space-y-2">
            <div>
              <dt className="text-sm font-medium text-gray-500">Current Price</dt>
              <dd className="text-2xl font-bold">${stock.price.toFixed(2)}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Market Cap</dt>
              <dd className="text-lg">{formatLargeNumber(stock.market_cap)}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Trading Volume</dt>
              <dd className="text-lg">{stock.volume.toLocaleString()}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {stock.beta > 1 ? (
              <ArrowUp className="h-5 w-5 text-red-500" />
            ) : (
              <ArrowDown className="h-5 w-5 text-green-500" />
            )}
            Risk Metrics
          </CardTitle>
          <CardDescription>Volatility and risk indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <dl className="space-y-2">
            <div>
              <dt className="text-sm font-medium text-gray-500">Beta</dt>
              <dd className="text-2xl font-bold">{stock.beta.toFixed(2)}</dd>
              <dd className="text-sm text-gray-600">{getBetaDescription(stock.beta)}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Financial Ratios</CardTitle>
          <CardDescription>Key financial indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <dl className="space-y-2">
            <div>
              <dt className="text-sm font-medium text-gray-500">P/E Ratio</dt>
              <dd className="text-2xl font-bold">{stock.pe_ratio.toFixed(2)}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Dividend Yield</dt>
              <dd className="text-2xl font-bold">
                {(stock.dividend_yield * 100).toFixed(2)}%
              </dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleStockView;