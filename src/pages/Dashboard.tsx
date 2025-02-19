
import { PieChart, LineChart, BarChart, FileText } from "lucide-react";
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

      <div className="grid md:grid-cols-4 gap-6">
        <Link to="/ai-report">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Fund Reports</CardTitle>
              <PieChart className="w-4 h-4 text-aires-navy" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Visualizza i report dettagliati dei fondi
              </p>
            </CardContent>
          </Card>
        </Link>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Market Overview</CardTitle>
            <LineChart className="w-4 h-4 text-aires-emerald" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Analisi delle performance di mercato
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Portfolio Analysis</CardTitle>
            <BarChart className="w-4 h-4 text-aires-blue" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Analisi del portafoglio
            </p>
          </CardContent>
        </Card>

        <Link to="/pdf-analysis">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">PDF Analysis</CardTitle>
              <FileText className="w-4 h-4 text-aires-navy" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Analisi AI dei documenti PDF
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
