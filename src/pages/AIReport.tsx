
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, FileText, PieChart } from "lucide-react";

const AIReport = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-heading font-bold text-aires-navy mb-8">
        AI-Generated Reports
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Fund Analysis</CardTitle>
            <Database className="w-4 h-4 text-aires-navy" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Comprehensive analysis of fund performance and metrics
            </p>
            <button className="text-aires-blue hover:underline text-sm">
              Generate Report →
            </button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Market Insights</CardTitle>
            <PieChart className="w-4 h-4 text-aires-emerald" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              AI-driven market analysis and predictions
            </p>
            <button className="text-aires-blue hover:underline text-sm">
              Generate Report →
            </button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Custom Reports</CardTitle>
            <FileText className="w-4 h-4 text-aires-blue" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Generate customized reports based on specific criteria
            </p>
            <button className="text-aires-blue hover:underline text-sm">
              Generate Report →
            </button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div>
                  <h3 className="font-medium">Fund Performance Report #{i}</h3>
                  <p className="text-sm text-muted-foreground">
                    Generated on {new Date().toLocaleDateString()}
                  </p>
                </div>
                <button className="text-aires-blue hover:underline text-sm">
                  View Report
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIReport;
