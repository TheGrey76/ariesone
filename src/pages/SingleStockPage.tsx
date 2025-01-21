import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import SingleStockView from "@/components/SingleStockView";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const SingleStockPage = () => {
  const { ticker } = useParams();
  const navigate = useNavigate();

  const { data: stock, isLoading } = useQuery({
    queryKey: ["stock", ticker],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("stocks")
        .select("*")
        .eq("ticker", ticker)
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-aires-navy mb-8">Loading...</h1>
        </main>
        <Footer />
      </div>
    );
  }

  if (!stock) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-aires-navy mb-8">Stock not found</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="hover:bg-transparent hover:text-aires-blue"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <h1 className="text-4xl font-bold text-aires-navy">
            {stock.name} ({stock.ticker})
          </h1>
        </div>
        <SingleStockView stock={stock} />
      </main>
      <Footer />
    </div>
  );
};

export default SingleStockPage;