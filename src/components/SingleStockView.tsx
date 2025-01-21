import { StockData } from "@/types/stock";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowDown, ArrowUp, TrendingUp, DollarSign, BarChart3, Newspaper, AlertTriangle, TrendingDown, LineChart, ExternalLink } from "lucide-react";
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

  const getMarketAnalysis = (stock: StockData) => {
    const analyses = [];
    
    // Market Position Analysis
    if (stock.beta > 1.2) {
      analyses.push({
        title: "High Growth Potential",
        description: "Shows aggressive growth characteristics with significant market sensitivity",
        details: `Beta of ${stock.beta.toFixed(2)} indicates this stock tends to amplify market movements by ${((stock.beta - 1) * 100).toFixed(1)}%`,
        icon: <TrendingUp className="h-5 w-5 text-green-500" />,
        color: "border-green-500"
      });
    } else if (stock.beta < 0.8) {
      analyses.push({
        title: "Defensive Position",
        description: "Demonstrates stability with lower market correlation",
        details: `Beta of ${stock.beta.toFixed(2)} suggests this stock may provide protection during market downturns`,
        icon: <ArrowDown className="h-5 w-5 text-blue-500" />,
        color: "border-blue-500"
      });
    } else {
      analyses.push({
        title: "Market Alignment",
        description: "Balanced market sensitivity with moderate risk",
        details: `Beta of ${stock.beta.toFixed(2)} indicates movement closely aligned with market trends`,
        icon: <LineChart className="h-5 w-5 text-purple-500" />,
        color: "border-purple-500"
      });
    }

    // Valuation Analysis
    if (stock.pe_ratio < 0) {
      analyses.push({
        title: "Growth Stage Investment",
        description: "Company currently operating at a loss, typical for growth phase",
        details: "Negative P/E ratio suggests focus on growth over current profitability",
        icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
        color: "border-yellow-500"
      });
    } else if (stock.pe_ratio > 25) {
      analyses.push({
        title: "Premium Valuation",
        description: "Trading at a premium to market averages",
        details: `P/E ratio of ${stock.pe_ratio.toFixed(1)} suggests high growth expectations from investors`,
        icon: <TrendingUp className="h-5 w-5 text-red-500" />,
        color: "border-red-500"
      });
    } else if (stock.pe_ratio > 0) {
      analyses.push({
        title: "Fair Market Value",
        description: "Reasonably valued relative to earnings",
        details: `P/E ratio of ${stock.pe_ratio.toFixed(1)} indicates balanced market expectations`,
        icon: <BarChart3 className="h-5 w-5 text-green-500" />,
        color: "border-green-500"
      });
    }

    // Income Analysis
    const dividendPercentage = (stock.dividend_yield * 100).toFixed(2);
    if (stock.dividend_yield > 0.04) {
      analyses.push({
        title: "Strong Income Generator",
        description: `High dividend yield of ${dividendPercentage}%`,
        details: "Significant income potential through dividend payments",
        icon: <DollarSign className="h-5 w-5 text-green-500" />,
        color: "border-green-500"
      });
    } else if (stock.dividend_yield > 0) {
      analyses.push({
        title: "Moderate Income Component",
        description: `Dividend yield of ${dividendPercentage}%`,
        details: "Balanced approach between growth and income",
        icon: <DollarSign className="h-5 w-5 text-blue-500" />,
        color: "border-blue-500"
      });
    } else {
      analyses.push({
        title: "Growth-Focused Strategy",
        description: "No current dividend payments",
        details: "Company reinvests profits for future growth",
        icon: <TrendingUp className="h-5 w-5 text-purple-500" />,
        color: "border-purple-500"
      });
    }

    return analyses;
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              <a 
                href={`https://www.google.com/finance/quote/${stock.ticker}:NASDAQ`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 hover:underline inline-flex items-center gap-1"
              >
                Overview
                <ExternalLink className="h-4 w-4" />
              </a>
            </CardTitle>
            <CardDescription>
              <span className="text-2xl font-bold text-aires-navy block mt-2">
                {stock.ticker}
              </span>
              <span className="text-sm text-gray-600">
                {stock.name}
              </span>
            </CardDescription>
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
            Comprehensive Market Analysis
          </CardTitle>
          <CardDescription>In-depth analysis of key metrics and market indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {getMarketAnalysis(stock).map((analysis, index) => (
              <div key={index} className={`border-l-4 ${analysis.color} pl-4 py-3 bg-gray-50 rounded-r-lg`}>
                <div className="flex items-center gap-2 mb-1">
                  {analysis.icon}
                  <h4 className="font-semibold text-lg">{analysis.title}</h4>
                </div>
                <p className="text-sm font-medium text-gray-700 mb-1">
                  {analysis.description}
                </p>
                <p className="text-sm text-gray-600">
                  {analysis.details}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <StockNewsSection ticker={stock.ticker} />
    </div>
  );
};

export default SingleStockView;
