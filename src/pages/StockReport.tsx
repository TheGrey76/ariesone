
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StockTable from "@/components/StockTable";
import SingleStockView from "@/components/SingleStockView";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StockData } from "@/types/stock";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Cell, Pie, PieChart } from "recharts";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

const StockReport = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sectorFilter, setSectorFilter] = useState<string>("all");
  const isDevelopment = import.meta.env.DEV;

  const { data: stockData = [], isLoading } = useQuery({
    queryKey: ["stocks"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("stocks" as any)
        .select("*")
        .order('updated_at', { ascending: false });
      
      if (error) throw error;
      return data as StockData[];
    },
  });

  const sectors = Array.from(new Set(stockData.map((stock) => stock.sector)));
  
  const filteredData = stockData.filter((stock) => {
    const matchesSearch = stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.ticker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = sectorFilter === "all" || stock.sector === sectorFilter;
    return matchesSearch && matchesSector;
  });

  const showFullDashboard = filteredData.length !== 1;

  const totalMarketCap = filteredData.reduce((acc, stock) => acc + stock.market_cap, 0);
  const sectorDistribution = sectors
    .map((sector) => {
      const sectorMarketCap = filteredData
        .filter((stock) => stock.sector === sector)
        .reduce((acc, stock) => acc + stock.market_cap, 0);
      return {
        name: sector,
        value: (sectorMarketCap / totalMarketCap) * 100,
      };
    })
    .filter(sector => sector.value > 0)
    .sort((a, b) => b.value - a.value);

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884D8",
    "#82CA9D",
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation isDevelopment={isDevelopment} />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-aires-navy mb-8">Loading...</h1>
        </main>
        <Footer />
      </div>
    );
  }

  const lastUpdateTime = stockData.length > 0 
    ? format(new Date(stockData[0].updated_at), "MMMM d, yyyy 'at' h:mm a")
    : 'No data available';

  const renderKeyStatistics = () => {
    const averagePE = (filteredData.reduce((acc, stock) => acc + stock.pe_ratio, 0) / filteredData.length).toFixed(2);
    const averageDividend = (filteredData.reduce((acc, stock) => acc + stock.dividend_yield, 0) / filteredData.length * 100).toFixed(2);
    const averageBeta = (filteredData.reduce((acc, stock) => acc + stock.beta, 0) / filteredData.length).toFixed(2);

    return (
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Total Number of Companies</p>
          <p className="text-2xl font-semibold">{filteredData.length}</p>
          <p className="text-xs text-gray-400">Total number of companies in the report</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Average P/E Ratio</p>
          <p className="text-2xl font-semibold">{averagePE}</p>
          <p className="text-xs text-gray-400">Average price-to-earnings ratio across companies</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Average Dividend Yield</p>
          <p className="text-2xl font-semibold">{averageDividend}%</p>
          <p className="text-xs text-gray-400">Average annual dividend yield percentage</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Average Beta
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>Beta measures a stock's volatility compared to the overall market. A beta of 1 indicates the stock moves with the market, above 1 is more volatile, and below 1 is less volatile than the market.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </p>
          <p className="text-2xl font-semibold">{averageBeta}</p>
          <p className="text-xs text-gray-400">Average market volatility measure relative to the index</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation isDevelopment={isDevelopment} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-aires-navy mb-8">Stock Report</h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <Input
              placeholder="Search by name or ticker..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-4"
            />
          </div>
          <div>
            <Select
              value={sectorFilter}
              onValueChange={setSectorFilter}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter by sector" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sectors</SelectItem>
                {sectors.map((sector) => (
                  <SelectItem key={sector} value={sector}>
                    {sector}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {filteredData.length === 1 ? (
          <div className="mb-8">
            <SingleStockView stock={filteredData[0]} />
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">Sector Distribution (% of Total Market Cap)</h2>
              <ChartContainer className="h-[300px]" config={{}}>
                <PieChart>
                  <Pie
                    data={sectorDistribution}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={({ name, value }) => `${name}: ${value.toFixed(1)}%`}
                  >
                    {sectorDistribution.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">Key Statistics</h2>
              {renderKeyStatistics()}
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Stock List</h2>
            <p className="text-sm text-gray-600">
              Last updated: {lastUpdateTime}
            </p>
          </div>
          <StockTable data={filteredData} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StockReport;
