
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
    
    console.log(`Navigating to section: ${sectionId}`);
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // If we are on the home page, just scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      console.log(`Found element with ID: ${sectionId}, scrolling now`);
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log(`Element not found with ID: ${sectionId}`);
      // Debug - list all available IDs
      const allIds = Array.from(document.querySelectorAll('[id]')).map(el => el.id);
      console.log(`Available IDs on page: ${allIds.join(', ')}`);
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
              onClick={() => handleSectionNavigation('services')}
              className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent hover:from-aires-blue hover:to-aires-emerald transition-all"
            >
              Transformative Solutions
            </button>
            <button
              onClick={() => handleSectionNavigation('about')}
              className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent hover:from-aires-blue hover:to-aires-emerald transition-all"
            >
              Innovation in Action
            </button>
            {isDevelopment && (
              <>
                <Link
                  to="/dashboard"
                  className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent hover:from-aires-blue hover:to-aires-emerald transition-all"
                >
                  Dashboard
                </Link>
                <Link
                  to="/ai-report"
                  className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent hover:from-aires-blue hover:to-aires-emerald transition-all"
                >
                  AI Report
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
                onClick={() => handleSectionNavigation('services')}
                className="text-left font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent"
              >
                Transformative Solutions
              </button>
              <button
                onClick={() => handleSectionNavigation('about')}
                className="text-left font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent"
              >
                Innovation in Action
              </button>
              {isDevelopment && (
                <>
                  <Link
                    to="/dashboard"
                    className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent"
                    onClick={toggleMenu}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/ai-report"
                    className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent"
                    onClick={toggleMenu}
                  >
                    AI Report
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
