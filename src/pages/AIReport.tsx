
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, FileText, PieChart, Eye } from "lucide-react";
import { generatePDF } from "@/utils/pdfGenerator";
import { useToast } from "@/components/ui/use-toast";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Fund {
  id: string;
  fund_name: string;
  aum: number;
  irr: number;
  tvpi: number;
  strategy: string;
}

const AIReport = () => {
  const { toast } = useToast();
  const [selectedFund, setSelectedFund] = useState<Fund | null>(null);

  const { data: funds, isLoading, error } = useQuery({
    queryKey: ['funds'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("funds" as any)
        .select("*")
        .order('irr', { ascending: false });

      if (error) throw error;
      return data as Fund[];
    },
  });

  const handleGenerateReport = async () => {
    if (!funds) return;

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
          ${funds.map(fund => `
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;">${fund.fund_name}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${fund.aum}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${fund.irr}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${fund.tvpi}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${fund.strategy}</td>
            </tr>
          `).join("")}
        </table>
      </div>
    `;

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

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-24">
        <p>Caricamento...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-24">
        <p className="text-red-500">Errore nel caricamento dei dati</p>
      </div>
    );
  }

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
          <CardTitle>Available Funds</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {funds?.map((fund) => (
              <div
                key={fund.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div>
                  <h3 className="font-medium">{fund.fund_name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Strategy: {fund.strategy} | IRR: {fund.irr}% | TVPI: {fund.tvpi}
                  </p>
                </div>
                <button 
                  className="flex items-center gap-2 text-aires-blue hover:underline text-sm"
                  onClick={() => setSelectedFund(fund)}
                >
                  <Eye className="w-4 h-4" />
                  View Details
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={!!selectedFund} onOpenChange={() => setSelectedFund(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-aires-navy mb-6">
              {selectedFund?.fund_name} - Fund Details
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-8">
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">AUM</p>
                <p className="text-xl font-bold text-aires-navy">${selectedFund?.aum.toLocaleString()}M</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">IRR</p>
                <p className="text-xl font-bold text-aires-navy">{selectedFund?.irr}%</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">TVPI</p>
                <p className="text-xl font-bold text-aires-navy">{selectedFund?.tvpi}x</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Strategy</p>
                <p className="text-xl font-bold text-aires-navy">{selectedFund?.strategy}</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Investment Objectives</h3>
              <p className="text-gray-700 mb-4">
                {selectedFund?.fund_name} is a {selectedFund?.strategy.toLowerCase()} focused investment fund that aims to generate superior returns through strategic investments in its target market.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Key Focuses</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Primary focus on {selectedFund?.strategy} opportunities</li>
                    <li>Actively managed portfolio</li>
                    <li>Long-term capital appreciation</li>
                    <li>Disciplined investment approach</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Risk Management</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Diversification strategy</li>
                    <li>Regular monitoring</li>
                    <li>Professional management</li>
                    <li>Risk assessment tools</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <p className="text-sm text-gray-600">Investment Manager</p>
                  <p className="font-medium">Aires Capital Management</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Fund Currency</p>
                  <p className="font-medium">USD</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Inception Date</p>
                  <p className="font-medium">January 2024</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Investment Approach</p>
                  <p className="font-medium">Active Management</p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AIReport;
