import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useToast } from "@/hooks/use-toast";

// Mock data - in a real app this would come from an API
const mockData = [
  { date: "2024-01", value: 4000 },
  { date: "2024-02", value: 3000 },
  { date: "2024-03", value: 5000 },
  { date: "2024-04", value: 2780 },
  { date: "2024-05", value: 1890 },
  { date: "2024-06", value: 2390 },
];

const Products = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");

  const { data: marketData, isLoading } = useQuery({
    queryKey: ["marketData"],
    queryFn: async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return mockData;
    },
  });

  const handleSearch = () => {
    toast({
      title: "Search initiated",
      description: `Searching for: ${searchTerm}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-heading font-bold text-aires-navy mb-8">
          Market Analysis Dashboard
        </h1>

        <div className="mb-8">
          <div className="flex gap-4 mb-6">
            <Input
              placeholder="Search markets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
            <Button onClick={handleSearch}>Search</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: "Total Volume", value: "$2.4M", change: "+5.2%" },
              { title: "Average Price", value: "$342.5", change: "-1.2%" },
              { title: "Active Markets", value: "143", change: "+12%" },
            ].map((stat) => (
              <div
                key={stat.title}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-sm text-aires-gray mb-2">{stat.title}</h3>
                <p className="text-2xl font-bold text-aires-navy mb-1">
                  {stat.value}
                </p>
                <span
                  className={`text-sm ${
                    stat.change.startsWith("+")
                      ? "text-aires-emerald"
                      : "text-red-500"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-aires-navy mb-4">
              Market Trends
            </h2>
            {isLoading ? (
              <div className="h-[400px] flex items-center justify-center">
                <p>Loading chart data...</p>
              </div>
            ) : (
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={marketData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#2563EB"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;