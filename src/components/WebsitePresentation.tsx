import React from 'react';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generatePDF } from '@/utils/pdfGenerator';

const WebsitePresentation = () => {
  return (
    <div id="website-presentation" className="space-y-12 px-6 py-8 bg-white rounded-2xl shadow-sm">
      {/* Hero Section */}
      <section className="space-y-6 text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald bg-clip-text text-transparent">
          Aires Capital
        </h1>
        <p className="text-xl bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent max-w-2xl mx-auto">
          Your Trusted Partner in Investment Management
        </p>
      </section>

      {/* Who I Am Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent text-center">
          Who I Am
        </h2>
        <div className="p-6 bg-gradient-to-br from-aires-navy/5 to-aires-blue/5 rounded-xl shadow-lg border border-aires-navy/10">
          <p className="text-aires-navy/80 text-center">
            With over a decade of experience in investment management, I specialize in creating tailored investment solutions 
            that align with my clients' unique financial goals and risk preferences.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-br from-aires-navy/5 to-aires-blue/5 rounded-xl shadow-lg border border-aires-navy/10 hover:bg-aires-navy/10 transition-all">
            <h3 className="text-xl font-medium bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent mb-3">
              Investment Advisory
            </h3>
            <p className="text-aires-navy/80">Expert guidance for your investment decisions</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-aires-navy/5 to-aires-blue/5 rounded-xl shadow-lg border border-aires-navy/10 hover:bg-aires-navy/10 transition-all">
            <h3 className="text-xl font-medium bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent mb-3">
              Portfolio Management
            </h3>
            <p className="text-aires-navy/80">Professional management of your investment portfolio</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent text-center">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-br from-aires-navy/5 to-aires-blue/5 rounded-xl shadow-lg border border-aires-navy/10 hover:bg-aires-navy/10 transition-all">
            <h3 className="text-xl font-medium bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent mb-3">
              Private Equity Funds
            </h3>
            <p className="text-aires-navy/80">Access to exclusive private equity opportunities</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-aires-navy/5 to-aires-blue/5 rounded-xl shadow-lg border border-aires-navy/10 hover:bg-aires-navy/10 transition-all">
            <h3 className="text-xl font-medium bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent mb-3">
              Investment Solutions
            </h3>
            <p className="text-aires-navy/80">Customized investment solutions for your needs</p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="space-y-6">
        <div className="flex justify-center">
          <Button
            onClick={() => generatePDF('website-presentation', 'Aires-Capital-Presentation.pdf')}
            className="bg-gradient-to-r from-aires-navy to-aires-blue text-white font-medium px-6 py-2 rounded-lg flex items-center gap-2 transition-all hover:opacity-90"
            size="lg"
          >
            <FileText className="w-5 h-5" />
            Download Presentation
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent text-center">
          Contact Us
        </h2>
        <p className="text-center text-aires-navy/80">Get in touch with our team of investment professionals</p>
        <div className="p-6 bg-gradient-to-br from-aires-navy/5 to-aires-blue/5 rounded-xl shadow-lg border border-aires-navy/10 max-w-lg mx-auto">
          <div className="space-y-2 text-center">
            <p className="text-aires-navy/80">Email: quinley.martini@aries76.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsitePresentation;
