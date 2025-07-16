import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <div className="text-3xl font-heading font-bold bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald bg-clip-text text-transparent mb-2">
              Aires Data
            </div>
            <p className="text-sm text-aires-gray">
              AI-powered fundraising & deal placement
            </p>
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