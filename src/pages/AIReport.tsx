
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, FileText, PieChart } from "lucide-react";
import { generatePDF } from "@/utils/pdfGenerator";
import { useToast } from "@/components/ui/use-toast";

// Dati di esempio per i fund manager
const topFunds = [
  {
    fundName: "Alpha Growth Fund",
    aum: 1250,
    irr: 18.5,
    tvpi: 2.3,
    strategy: "Growth Equity"
  },
  {
    fundName: "Beta Value Partners",
    aum: 980,
    irr: 16.8,
    tvpi: 2.1,
    strategy: "Value"
  },
  {
    fundName: "Gamma Tech Fund",
    aum: 1500,
    irr: 22.4,
    tvpi: 2.8,
    strategy: "Technology"
  },
];

const AIReport = () => {
  const { toast } = useToast();

  const handleGenerateReport = async () => {
    // Creiamo il contenuto del report
    const reportContent = `
      <div id="report" style="font-family: Arial, sans-serif; padding: 40px;">
        <h1 style="color: #333;">AI-Generated Investment Report</h1>
        <p>Questo report evidenzia i migliori fund manager in base ai criteri AI.</p>
        
        <h2>Top Performing Funds</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;">Fund Name</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;">AUM (Mln $)</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;">IRR (%)</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;">TVPI</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;">Strategy</th>
          </tr>
          ${topFunds.map(fund => `
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;">${fund.fundName}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${fund.aum}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${fund.irr}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${fund.tvpi}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${fund.strategy}</td>
            </tr>
          `).join("")}
        </table>
      </div>
    `;

    // Aggiungiamo temporaneamente il contenuto al DOM
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = reportContent;
    tempDiv.style.position = "absolute";
    tempDiv.style.left = "-9999px";
    document.body.appendChild(tempDiv);

    try {
      await generatePDF("report", "ai-investment-report.pdf");
      toast({
        title: "Report generato con successo",
        description: "Il report è stato scaricato come PDF",
      });
    } catch (error) {
      toast({
        title: "Errore nella generazione del report",
        description: "Si è verificato un errore durante la generazione del PDF",
        variant: "destructive",
      });
    } finally {
      document.body.removeChild(tempDiv);
    }
  };

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
            <button 
              className="text-aires-blue hover:underline text-sm"
              onClick={handleGenerateReport}
            >
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
