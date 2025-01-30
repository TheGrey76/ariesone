
import React from 'react';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generatePDF } from '@/utils/pdfGenerator';

const WebsitePresentation = () => {
  return (
    <div id="website-presentation" className="space-y-12 px-6 py-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm">
      {/* Hero Section */}
      <section className="space-y-6 text-center">
        <h1 className="text-5xl font-bold text-aires-navy">Aires Capital</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your Trusted Partner in Investment Management
        </p>
      </section>

      {/* Services Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-aires-navy text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium text-aires-emerald mb-3">Investment Advisory</h3>
            <p className="text-gray-600">Expert guidance for your investment decisions</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium text-aires-emerald mb-3">Portfolio Management</h3>
            <p className="text-gray-600">Professional management of your investment portfolio</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-aires-navy text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium text-aires-emerald mb-3">Private Equity Funds</h3>
            <p className="text-gray-600">Access to exclusive private equity opportunities</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium text-aires-emerald mb-3">Investment Solutions</h3>
            <p className="text-gray-600">Customized investment solutions for your needs</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-aires-navy text-center">Contact Us</h2>
        <p className="text-center text-gray-600">Get in touch with our team of investment professionals</p>
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 max-w-lg mx-auto">
          <div className="space-y-2 text-center">
            <p className="text-gray-600">Email: contact@airescapital.com</p>
            <p className="text-gray-600">Phone: (555) 123-4567</p>
          </div>
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
      className="bg-aires-navy hover:bg-aires-navy/90 text-white font-medium px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
      size="lg"
    >
      <FileText className="w-5 h-5" />
      Download Presentation
    </Button>
  );
};

export default WebsitePresentation;
