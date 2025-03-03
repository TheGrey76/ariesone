
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

interface NavigationProps {
  isDevelopment: boolean;
}

const Navigation = ({ isDevelopment }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle mobile menu link clicks
  const handleMobileMenuClick = (targetId: string) => {
    setIsOpen(false); // Close the menu
    
    // Debug log to check what targetId is being passed
    console.log(`Trying to scroll to: ${targetId}`);
    
    // Small delay to ensure the menu is closed before scrolling
    setTimeout(() => {
      // Check if targetId is "about" or "services" which are section IDs
      const sectionId = targetId.replace('#', '');
      console.log(`Looking for element with ID: ${sectionId}`);
      
      const element = document.getElementById(sectionId);
      if (element) {
        console.log(`Found element, scrolling to: ${sectionId}`);
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.log(`Element not found with ID: ${sectionId}`);
        // Try to find any element that might match
        const allIds = Array.from(document.querySelectorAll('[id]')).map(el => el.id);
        console.log(`Available IDs on page: ${allIds.join(', ')}`);
      }
    }, 500); // Increased delay to make sure DOM is ready
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex flex-col items-start">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/517b8cb3-5d1d-4535-9aa8-00db40ad6258.png" 
                alt="AIRES Logo" 
                className="h-12 mr-2"
              />
              <span className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald bg-clip-text text-transparent">
                AIRES
              </span>
            </Link>
            <span className="text-sm font-heading font-semibold bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent pl-14">
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
            <a
              href="#services"
              className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent hover:from-aires-blue hover:to-aires-emerald transition-all"
            >
              Transformative Solutions
            </a>
            <a
              href="#about"
              className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent hover:from-aires-blue hover:to-aires-emerald transition-all"
            >
              Innovation in Action
            </a>
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
            <a
              href="#contact"
              className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent hover:from-aires-blue hover:to-aires-emerald transition-all"
            >
              Contact
            </a>
          </div>
        </div>

        {isMobile && isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleMobileMenuClick("services")}
                className="text-left font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent"
              >
                Transformative Solutions
              </button>
              <button
                onClick={() => handleMobileMenuClick("about")}
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
                onClick={() => handleMobileMenuClick("contact")}
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
