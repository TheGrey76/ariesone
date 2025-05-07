
import { LineChart } from "lucide-react";

const PortfolioAnalysis = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-heading font-bold text-aires-navy">
          Portfolio Analysis
        </h1>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex items-center mb-4">
          <LineChart className="h-6 w-6 text-aires-navy mr-2" />
          <h2 className="text-xl font-semibold">Portfolio Performance</h2>
        </div>
        <p className="mb-4 text-muted-foreground">
          Comprehensive analysis of your portfolio performance over time.
        </p>
        <div className="h-60 bg-gray-50 flex items-center justify-center rounded-md">
          <p className="text-muted-foreground">Portfolio performance chart will appear here</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Asset Allocation</h3>
          <p className="text-muted-foreground mb-4">
            Breakdown of assets in your portfolio
          </p>
          <div className="h-40 bg-gray-50 flex items-center justify-center rounded-md">
            <p className="text-muted-foreground">Allocation chart</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Risk Analysis</h3>
          <p className="text-muted-foreground mb-4">
            Portfolio risk assessment and metrics
          </p>
          <div className="h-40 bg-gray-50 flex items-center justify-center rounded-md">
            <p className="text-muted-foreground">Risk visualization</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAnalysis;
