
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Dashboard from "./pages/Dashboard";
import AIReport from "./pages/AIReport";
import Products from "./pages/Products";
import Advisory from "./pages/Advisory";
import Sponsorship from "./pages/Sponsorship";
import StockReport from "./pages/StockReport";
import SingleStockPage from "./pages/SingleStockPage";

const queryClient = new QueryClient();

function App() {
  const isDevelopment = import.meta.env.DEV;

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Router>
            <div className="min-h-screen flex flex-col">
              <Navigation isDevelopment={isDevelopment} />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<Terms />} />
                  {isDevelopment && (
                    <>
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/ai-report" element={<AIReport />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/advisory" element={<Advisory />} />
                      <Route path="/sponsorship" element={<Sponsorship />} />
                      <Route path="/stock-report" element={<StockReport />} />
                      <Route path="/stock/:symbol" element={<SingleStockPage />} />
                    </>
                  )}
                </Routes>
              </main>
              <Footer />
              <ScrollToTop />
            </div>
          </Router>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
