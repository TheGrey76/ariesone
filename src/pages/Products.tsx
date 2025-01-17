import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { generatePDF } from "@/utils/pdfGenerator";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const portfolioData = [
  {
    category: "CLO AAA",
    etf: "Janus Henderson AAA CLO ETF",
    ticker: "JAAA",
    weight: 20,
    annualYield: 5.5,
    monthlyYield: 0.46,
    color: "#2563EB"
  },
  {
    category: "CLO AA",
    etf: "iShares AAA CLO Active ETF",
    ticker: "CLOA",
    weight: 15,
    annualYield: 5.0,
    monthlyYield: 0.42,
    color: "#3B82F6"
  },
  {
    category: "CLO A",
    etf: "VanEck CLO ETF",
    ticker: "CLOI",
    weight: 10,
    annualYield: 6.0,
    monthlyYield: 0.50,
    color: "#60A5FA"
  },
  {
    category: "Corporate Bond High Yield",
    etf: "iShares iBoxx USD High Yield Corporate Bond ETF",
    ticker: "HYG",
    weight: 30,
    annualYield: 7.5,
    monthlyYield: 0.63,
    color: "#93C5FD"
  },
  {
    category: "Emerging Market Bond",
    etf: "iShares J.P. Morgan USD Emerging Markets Bond ETF",
    ticker: "EMB",
    weight: 25,
    annualYield: 8.0,
    monthlyYield: 0.67,
    color: "#BFDBFE"
  }
];

const Products = () => {
  const { toast } = useToast();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbol": "AMEX:JAAA",
      "width": "100%",
      "height": "100%",
      "locale": "en",
      "dateRange": "12M",
      "colorTheme": "light",
      "trendLineColor": "#37a6ef",
      "underLineColor": "#E3F2FD",
      "isTransparent": false,
      "autosize": true,
      "largeChartUrl": ""
    });

    const container = document.getElementById('tradingview-widget');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container && script) {
        container.removeChild(script);
      }
    };
  }, []);

  const totalAnnualYield = portfolioData.reduce(
    (acc, item) => acc + (item.weight / 100) * item.annualYield,
    0
  ).toFixed(2);

  const totalMonthlyYield = portfolioData.reduce(
    (acc, item) => acc + (item.weight / 100) * item.monthlyYield,
    0
  ).toFixed(2);

  const chartConfig = {
    portfolio: {
      label: "Portfolio",
      theme: {
        light: "#2563EB",
        dark: "#3B82F6"
      }
    }
  };

  const handleDownloadPDF = () => {
    generatePDF('portfolio-content', 'AIRES-Portfolio-Holdings.pdf');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-heading font-bold text-aires-navy">
            Portfolio Holdings
          </h1>
          <Button
            onClick={handleDownloadPDF}
            className="bg-aires-navy hover:bg-aires-blue text-white transition-colors"
          >
            <FileDown className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>

        <div id="portfolio-content" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Composition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ChartContainer config={chartConfig}>
                    <PieChart>
                      <Pie
                        data={portfolioData}
                        dataKey="weight"
                        nameKey="category"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label={({ name, percent }) => 
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {portfolioData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Live Chart (JAAA)</CardTitle>
              </CardHeader>
              <CardContent>
                <div id="tradingview-widget" className="h-[300px] w-full"></div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Portfolio Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-aires-gray">Total Annual Yield</p>
                  <p className="text-3xl font-bold text-aires-navy">
                    {totalAnnualYield}%
                  </p>
                </div>
                <div>
                  <p className="text-sm text-aires-gray">Total Monthly Yield</p>
                  <p className="text-3xl font-bold text-aires-navy">
                    {totalMonthlyYield}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Portfolio Components</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Selected ETF</TableHead>
                    <TableHead>Ticker</TableHead>
                    <TableHead className="text-right">Weight (%)</TableHead>
                    <TableHead className="text-right">Annual Yield (%)</TableHead>
                    <TableHead className="text-right">Monthly Yield (%)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {portfolioData.map((item) => (
                    <TableRow key={item.ticker}>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.etf}</TableCell>
                      <TableCell>{item.ticker}</TableCell>
                      <TableCell className="text-right">{item.weight}</TableCell>
                      <TableCell className="text-right">{item.annualYield}</TableCell>
                      <TableCell className="text-right">
                        {item.monthlyYield}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                {portfolioData.map((item) => (
                  <li key={item.ticker}>
                    <span className="font-medium">{item.etf} ({item.ticker})</span>: 
                    {item.category.includes("CLO") 
                      ? ` Provides exposure to ${item.category}-rated CLOs`
                      : item.category.includes("Corporate")
                      ? " Tracks high-yield corporate bonds"
                      : " Offers exposure to emerging markets bonds"
                    } with a current yield of approximately {item.annualYield}%.
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Products;
