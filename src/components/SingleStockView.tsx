import { StockData } from "@/types/stock";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowDown, ArrowUp, TrendingUp, DollarSign, BarChart3, Newspaper } from "lucide-react";
import StockNewsSection from "./StockNewsSection";

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

  const getPERatioAnalysis = (pe: number) => {
    if (pe < 0) return "Negative earnings";
    if (pe < 10) return "Potentially undervalued";
    if (pe < 20) return "Moderately valued";
    if (pe < 30) return "Premium valuation";
    return "High growth expectations";
  };

  const getDividendAnalysis = (yield_: number) => {
    const percentage = yield_ * 100;
    if (percentage === 0) return "No dividend paid";
    if (percentage < 2) return "Low yield";
    if (percentage < 4) return "Moderate yield";
    return "High yield";
  };

  return (
    <div className="space-y-6">
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
                <dd className="text-sm text-gray-600">
                  Daily trading activity
                </dd>
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
              <div>
                <dt className="text-sm font-medium text-gray-500">Volatility Analysis</dt>
                <dd className="text-sm text-gray-600">
                  {stock.beta > 1 
                    ? "Higher risk, potentially higher returns" 
                    : "Lower risk, potentially stable returns"}
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Financial Ratios
            </CardTitle>
            <CardDescription>Key financial indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm font-medium text-gray-500">P/E Ratio</dt>
                <dd className="text-2xl font-bold">{stock.pe_ratio.toFixed(2)}</dd>
                <dd className="text-sm text-gray-600">{getPERatioAnalysis(stock.pe_ratio)}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Dividend Yield</dt>
                <dd className="text-2xl font-bold">
                  {(stock.dividend_yield * 100).toFixed(2)}%
                </dd>
                <dd className="text-sm text-gray-600">
                  {getDividendAnalysis(stock.dividend_yield)}
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Newspaper className="h-5 w-5" />
            Latest Market Analysis
          </CardTitle>
          <CardDescription>Recent updates and market sentiment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Market Position</h4>
              <p className="text-sm text-gray-600">
                {stock.beta > 1.2 
                  ? "Shows aggressive growth characteristics with higher market sensitivity"
                  : stock.beta < 0.8
                  ? "Demonstrates defensive characteristics with lower market correlation"
                  : "Maintains balanced market alignment with moderate sensitivity"}
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">Valuation Insight</h4>
              <p className="text-sm text-gray-600">
                {stock.pe_ratio > 25
                  ? "Trading at a premium, suggesting high growth expectations"
                  : stock.pe_ratio > 15
                  ? "Valued in line with market averages"
                  : stock.pe_ratio > 0
                  ? "Currently trading at a value-oriented multiple"
                  : "Negative earnings indicate speculative nature"}
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold">Income Potential</h4>
              <p className="text-sm text-gray-600">
                {stock.dividend_yield > 0.04
                  ? "Significant dividend yield suggests strong income potential"
                  : stock.dividend_yield > 0
                  ? "Moderate dividend payments indicate balanced shareholder returns"
                  : "Focus on growth rather than current income distribution"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <StockNewsSection ticker={stock.ticker} />
    </div>
  );
};

export default SingleStockView;