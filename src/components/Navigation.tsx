import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
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
            <a href="/" className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald bg-clip-text text-transparent">
              AIRES
            </a>
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
            <a
              href="#about"
              className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent hover:from-aires-blue hover:to-aires-emerald transition-all"
            >
              About
            </a>
            <a
              href="#services"
              className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent hover:from-aires-blue hover:to-aires-emerald transition-all"
            >
              Services
            </a>
            <a
              href="#team"
              className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent hover:from-aires-blue hover:to-aires-emerald transition-all"
            >
              Team
            </a>
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
              <a
                href="#about"
                className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#services"
                className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#team"
                className="font-medium bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent"
                onClick={toggleMenu}
              >
                Team
              </a>
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