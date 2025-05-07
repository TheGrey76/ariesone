
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/edoardogrigione/", "_blank");
  };
  
  const handleEmailClick = () => {
    window.location.href = "mailto:eg@airesdata.net";
  };

  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-3xl font-heading font-bold bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald bg-clip-text text-transparent mb-2">
              Aires Data
            </div>
            <p className="text-sm text-aires-gray">
              AI-powered fundraising & deal placement
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 border-aires-blue text-aires-blue hover:bg-aires-blue hover:text-white"
              onClick={handleEmailClick}
            >
              <Mail className="w-4 h-4" />
              eg@airesdata.net
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="bg-[#0A66C2] hover:bg-[#004182] text-white border-none transition-all duration-300 hover:scale-105"
              onClick={handleLinkedInClick}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              Connect
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-aires-gray mb-4 md:mb-0">
            © {new Date().getFullYear()} Aires Data. All rights reserved.
          </div>
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
    </footer>
  );
};

export default Footer;
