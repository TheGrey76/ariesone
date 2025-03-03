
import { PieChart, BarChart, LineChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-heading font-bold text-aires-navy">
          Dashboard
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Link to="/ai-report">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Fund Reports</CardTitle>
              <PieChart className="w-4 h-4 text-aires-navy" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <img 
                  src="/lovable-uploads/51149253-a392-4fb8-8ab0-e82c839c0455.png" 
                  alt="Fund Reports" 
                  className="w-full h-32 object-cover rounded-md"
                />
                <p className="text-sm text-muted-foreground">
                  Visualizza i report dettagliati dei fondi
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/market-overview">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Market Overview</CardTitle>
              <BarChart className="w-4 h-4 text-aires-navy" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Market Overview" 
                  className="w-full h-32 object-cover rounded-md"
                />
                <p className="text-sm text-muted-foreground">
                  Analisi delle performance di mercato
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/portfolio-analysis">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Portfolio Analysis</CardTitle>
              <LineChart className="w-4 h-4 text-aires-navy" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Portfolio Analysis" 
                  className="w-full h-32 object-cover rounded-md"
                />
                <p className="text-sm text-muted-foreground">
                  Analisi del portafoglio
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

    </div>
  );
};

export default Dashboard;
