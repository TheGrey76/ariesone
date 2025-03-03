import { useState } from "react";
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
              <a
                href="#contact"
                className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
