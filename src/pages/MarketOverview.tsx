
import { BarChart } from "lucide-react";

const MarketOverview = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-heading font-bold text-aires-navy">
          Market Overview
        </h1>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex items-center mb-4">
          <BarChart className="h-6 w-6 text-aires-navy mr-2" />
          <h2 className="text-xl font-semibold">Market Performance</h2>
        </div>
        <p className="mb-4 text-muted-foreground">
          Comprehensive analysis of current market trends and performance indicators.
        </p>
        <div className="h-60 bg-gray-50 flex items-center justify-center rounded-md">
          <p className="text-muted-foreground">Market data visualization will appear here</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Market Sectors</h3>
          <p className="text-muted-foreground mb-4">
            Performance breakdown by market sectors
          </p>
          <div className="h-40 bg-gray-50 flex items-center justify-center rounded-md">
            <p className="text-muted-foreground">Sector analysis chart</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Market Indicators</h3>
          <p className="text-muted-foreground mb-4">
            Key indicators and economic factors
          </p>
          <div className="h-40 bg-gray-50 flex items-center justify-center rounded-md">
            <p className="text-muted-foreground">Indicators visualization</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketOverview;
