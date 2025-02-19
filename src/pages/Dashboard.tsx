import { PieChart } from "lucide-react";
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
              <p className="text-sm text-muted-foreground">
                Visualizza i report dettagliati dei fondi
              </p>
            </CardContent>
          </Card>
        </Link>

          

          
            
              
                Market Overview
                
                
                  Analisi delle performance di mercato
                
              
            

          
            
              
                Portfolio Analysis
                
                
                  Analisi del portafoglio
                
              
            
      </div>

      
    </div>
  );
};

export default Dashboard;
