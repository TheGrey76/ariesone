import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const Footer = () => {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/edoardogrigione/", "_blank");
  };

  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-aires-gray mb-4 md:mb-0">
            © {new Date().getFullYear()} AIRES. All rights reserved.
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
            <Button
              variant="outline"
              size="sm"
              className="bg-[#0A66C2] hover:bg-[#004182] text-white border-none mr-6 transition-all duration-300 hover:scale-105 px-6 py-2"
              onClick={handleLinkedInClick}
            >
              <Linkedin className="w-5 h-5 mr-2 stroke-[1.5]" />
              Follow us
            </Button>
            <div className="flex space-x-6">
              <a
                href="/privacy"
                className="text-sm text-aires-gray hover:text-aires-navy transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-sm text-aires-gray hover:text-aires-navy transition-colors"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;