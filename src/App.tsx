
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import Advisory from "./pages/Advisory";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Login from "./pages/Login";
import SingleStockPage from "./pages/SingleStockPage";
import StockReport from "./pages/StockReport";
import AIReport from "./pages/AIReport";
import PDFAnalysis from "./pages/PDFAnalysis";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/stock/:symbol"
            element={
              <ProtectedRoute>
                <SingleStockPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/stock-report"
            element={
              <ProtectedRoute>
                <StockReport />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ai-report"
            element={
              <ProtectedRoute>
                <AIReport />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pdf-analysis"
            element={
              <ProtectedRoute>
                <PDFAnalysis />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
        <Toaster />
      </Router>
    </AuthProvider>
  );
};

export default App;
