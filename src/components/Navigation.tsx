
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, PieChart, BarChart, LineChart, LogIn } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface NavigationProps {
  isDevelopment: boolean;
}

const Navigation = ({ isDevelopment }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle section navigation
  const handleSectionNavigation = (sectionId: string) => {
    // Close mobile menu if it's open
    if (isOpen) {
      setIsOpen(false);
    }
    
    // If we're on the AiresLanding page, navigate to the old page with the section
    if (location.pathname === "/") {
      navigate(`/old#${sectionId}`);
      return;
    }
    
    // If we're on the old page, just scroll to the section
    if (location.pathname === "/old") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    
    // If we're on any other page, navigate to the old page with the section
    navigate(`/old#${sectionId}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between min-h-[11rem] md:min-h-[9rem] lg:min-h-[10rem]">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/82f1920b-dea8-4596-900b-66cbcbe922d8.png" 
                alt="Aires Logo" 
                className="h-40 md:h-32 lg:h-36 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {isDevelopment && (
              <>
                {user ? (
                  <>
                    <Link
                      to="/market-overview"
                      className="font-medium bg-gradient-to-r from-aires-blue to-aires-green bg-clip-text text-transparent hover:from-aires-blueDark hover:to-aires-greenLight transition-all flex items-center gap-1"
                    >
                      <BarChart className="h-4 w-4" />
                      Market Overview
                    </Link>
                    <Link
                      to="/portfolio-analysis"
                      className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent hover:from-aires-blue hover:to-aires-emerald transition-all flex items-center gap-1"
                    >
                      <LineChart className="h-4 w-4" />
                      Portfolio Analysis
                    </Link>
                    <Link
                      to="/dashboard"
                      className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent hover:from-aires-blue hover:to-aires-emerald transition-all flex items-center gap-1"
                    >
                      <PieChart className="h-4 w-4" />
                      Dashboard
                    </Link>
                  </>
                ) : null}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
