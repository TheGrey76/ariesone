
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, PieChart, BarChart, LineChart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  isDevelopment: boolean;
}

const Navigation = ({ isDevelopment }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle section navigation
  const handleSectionNavigation = (sectionId: string) => {
    // Close mobile menu if it's open
    if (isOpen) {
      setIsOpen(false);
    }
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // If we are on the home page, just scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex flex-col items-start">
            <Link to="/" className="flex items-center">
              <span className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald bg-clip-text text-transparent">
                AIRES
              </span>
            </Link>
            <span className="text-sm font-heading font-semibold bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">
              Data Driven Decision
            </span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleSectionNavigation('about')}
              className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent hover:from-aires-blue hover:to-aires-emerald transition-all"
            >
              About Us
            </button>
            {isDevelopment && (
              <>
                <Link
                  to="/market-overview"
                  className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent hover:from-aires-blue hover:to-aires-emerald transition-all flex items-center gap-1"
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
            )}
            <button
              onClick={() => handleSectionNavigation('contact')}
              className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent hover:from-aires-blue hover:to-aires-emerald transition-all"
            >
              Contact
            </button>
          </div>
        </div>

        {isMobile && isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleSectionNavigation('about')}
                className="text-left font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent"
              >
                About Us
              </button>
              {isDevelopment && (
                <>
                  <Link
                    to="/market-overview"
                    className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent flex items-center gap-1"
                    onClick={toggleMenu}
                  >
                    <BarChart className="h-4 w-4" />
                    Market Overview
                  </Link>
                  <Link
                    to="/portfolio-analysis"
                    className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent flex items-center gap-1"
                    onClick={toggleMenu}
                  >
                    <LineChart className="h-4 w-4" />
                    Portfolio Analysis
                  </Link>
                  <Link
                    to="/dashboard"
                    className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent flex items-center gap-1"
                    onClick={toggleMenu}
                  >
                    <PieChart className="h-4 w-4" />
                    Dashboard
                  </Link>
                </>
              )}
              <button
                onClick={() => handleSectionNavigation('contact')}
                className="text-left font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
