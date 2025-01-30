
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-white/50 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              AIRES
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/about"
              className="font-medium bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              About
            </Link>
            <Link
              to="/products"
              className="font-medium bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="font-medium bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-aires-navy hover:text-aires-blue focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="flex flex-col space-y-4 p-4">
              <Link
                to="/about"
                className="font-medium bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/products"
                className="font-medium bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="font-medium bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
