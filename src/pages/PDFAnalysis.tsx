
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileUp, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const PDFAnalysis = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.includes('pdf')) {
      toast({
        title: "Errore",
        description: "Per favore carica un file PDF",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const { data, error } = await supabase.functions.invoke('analyze-pdf', {
        body: formData,
      });

      if (error) throw error;

      setAnalysis(data.analysis);
      toast({
        title: "Analisi completata",
        description: "Il documento è stato analizzato con successo",
      });
    } catch (error) {
      console.error('Error analyzing PDF:', error);
      toast({
        title: "Errore nell'analisi",
        description: "Si è verificato un errore durante l'analisi del documento",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-aires-navy">
            Analisi PDF con AI
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileUpload}
                className="hidden"
                id="pdf-upload"
                disabled={isAnalyzing}
              />
              <label
                htmlFor="pdf-upload"
                className="flex items-center gap-2 px-4 py-2 bg-aires-blue text-white rounded-lg hover:bg-aires-blue/90 cursor-pointer disabled:opacity-50"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Analisi in corso...
                  </>
                ) : (
                  <>
                    <FileUp className="h-4 w-4" />
                    Carica PDF
                  </>
                )}
              </label>
            </div>
          </div>

          {analysis && (
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Risultati dell'analisi:</h3>
              <div className="whitespace-pre-wrap">{analysis}</div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PDFAnalysis;
