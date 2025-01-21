import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StockTable from "@/components/StockTable";
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

const StockReport = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sectorFilter, setSectorFilter] = useState<string>("all");

  const { data: stockData = [], isLoading } = useQuery({
    queryKey: ["stocks"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("stocks")
        .select("*");
      
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

  // Calculate sector distribution for pie chart
  const sectorDistribution = sectors.map((sector) => ({
    name: sector,
    value: filteredData.filter((stock) => stock.sector === sector)
      .reduce((acc, stock) => acc + stock.marketCap, 0),
  }));

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
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-aires-navy mb-8">Loading...</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
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

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Sector Distribution</h2>
            <ChartContainer className="h-[300px]" config={{}}>
              <PieChart>
                <Pie
                  data={sectorDistribution}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Total Companies</p>
                <p className="text-2xl font-semibold">{filteredData.length}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Average P/E Ratio</p>
                <p className="text-2xl font-semibold">
                  {(filteredData.reduce((acc, stock) => acc + stock.peRatio, 0) / filteredData.length).toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Average Dividend Yield</p>
                <p className="text-2xl font-semibold">
                  {(filteredData.reduce((acc, stock) => acc + stock.dividendYield, 0) / filteredData.length * 100).toFixed(2)}%
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Average Beta</p>
                <p className="text-2xl font-semibold">
                  {(filteredData.reduce((acc, stock) => acc + stock.beta, 0) / filteredData.length).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Stock List</h2>
          <StockTable data={filteredData} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StockReport;