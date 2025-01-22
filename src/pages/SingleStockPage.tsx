import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import SingleStockView from "@/components/SingleStockView";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

const SingleStockPage = () => {
  const { ticker } = useParams();
  const navigate = useNavigate();

  const { data: stock, isLoading, error } = useQuery({
    queryKey: ["stock", ticker],
    queryFn: async () => {
      console.log("Fetching stock data for ticker:", ticker);
      const { data, error } = await supabase
        .from("stocks")
        .select("*")
        .eq("ticker", ticker)
        .maybeSingle();
      
      if (error) {
        console.error("Error fetching stock:", error);
        throw error;
      }
      
      if (!data) {
        throw new Error("Stock not found");
      }

      console.log("Stock data received:", data);
      return data;
    },
    enabled: !!ticker,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/stock-report")}
            className="mb-8 hover:bg-gray-100"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Stock List
          </Button>
          <h1 className="text-4xl font-bold text-aires-navy">Loading...</h1>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/stock-report")}
            className="mb-8 hover:bg-gray-100"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Stock List
          </Button>
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {error instanceof Error && error.message === "Stock not found" 
                ? `No stock found with ticker symbol ${ticker}`
                : "Failed to load stock data. Please try again later."}
            </AlertDescription>
          </Alert>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/stock-report")}
          className="mb-8 hover:bg-gray-100"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Stock List
        </Button>
        <h1 className="text-4xl font-bold text-aires-navy mb-8">
          {stock.name} ({stock.ticker})
        </h1>
        <SingleStockView stock={stock} />
      </main>
      <Footer />
    </div>
  );
};

export default SingleStockPage;