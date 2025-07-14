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
import { StockData } from "@/types/stock";

const SingleStockPage = () => {
  const { ticker } = useParams();
  const navigate = useNavigate();
  const isDevelopment = import.meta.env.DEV;

  const { data: stock, isLoading, error } = useQuery({
    queryKey: ["stock", ticker],
    queryFn: async () => {
      console.log("Fetching stock data for ticker:", ticker);
      const { data, error } = await supabase
        .from("stocks" as any)
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
      return data as unknown as StockData;
    },
    enabled: !!ticker,
  });

  const BackButton = () => (
    <div className="sticky top-0 z-50 bg-white shadow-md py-4 px-6 mb-8">
      <Button
        variant="default"
        onClick={() => navigate("/stock-report")}
        className="flex items-center gap-2 bg-aires-navy hover:bg-aires-blue text-white transition-colors"
        size="lg"
      >
        <ArrowLeft className="h-6 w-6" />
        Back to Stock List
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation isDevelopment={isDevelopment} />
      <main className="container mx-auto px-4">
        <BackButton />
        {isLoading && (
          <h1 className="text-4xl font-bold text-aires-navy">Loading...</h1>
        )}
        {error && (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {error instanceof Error && error.message === "Stock not found" 
                ? `No stock found with ticker symbol ${ticker}`
                : "Failed to load stock data. Please try again later."}
            </AlertDescription>
          </Alert>
        )}
        {!stock && !isLoading && !error && (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              No stock data found for ticker symbol {ticker}
            </AlertDescription>
          </Alert>
        )}
        {stock && (
          <>
            <h1 className="text-4xl font-bold text-aires-navy mb-8">
              {stock.name} ({stock.ticker})
            </h1>
            <SingleStockView stock={stock} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default SingleStockPage;
