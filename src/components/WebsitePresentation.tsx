
import React from 'react';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generatePDF } from '@/utils/pdfGenerator';

const WebsitePresentation = () => {
  return (
    <div id="website-presentation" className="space-y-8 px-4 py-6">
      {/* Hero Section */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Aires Capital</h1>
        <p className="text-lg text-muted-foreground">
          Your Trusted Partner in Investment Management
        </p>
      </section>

      {/* Services Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-medium">Investment Advisory</h3>
            <p>Expert guidance for your investment decisions</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-medium">Portfolio Management</h3>
            <p>Professional management of your investment portfolio</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-medium">Private Equity Funds</h3>
            <p>Access to exclusive private equity opportunities</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-medium">Investment Solutions</h3>
            <p>Customized investment solutions for your needs</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p>Get in touch with our team of investment professionals</p>
        <div className="p-4 border rounded-lg">
          <p>Email: contact@airescapital.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
      </section>
    </div>
  );
};

export const WebsitePresentationButton = () => {
  const handleDownload = () => {
    generatePDF('website-presentation', 'Aires-Capital-Presentation.pdf');
  };

  return (
    <Button
      onClick={handleDownload}
      className="flex items-center gap-2"
      variant="outline"
    >
      <FileText className="w-4 h-4" />
      Download Presentation
    </Button>
  );
};

export default WebsitePresentation;
