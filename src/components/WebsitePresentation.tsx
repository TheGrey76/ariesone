
import React from 'react';
import { FileText, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generatePDF } from '@/utils/pdfGenerator';

const WebsitePresentation = () => {
  const scrollToContent = () => {
    const contentElement = document.getElementById('services');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-24">
      {/* Hero Section with Full Height */}
      <section className="min-h-screen flex flex-col justify-center items-center relative">
        <div className="text-center space-y-8 max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald bg-clip-text text-transparent">
            Aires Capital
          </h1>
          <p className="text-xl md:text-2xl text-aires-navy/80 max-w-2xl mx-auto leading-relaxed">
            Building lasting partnerships through strategic investment management and personalized financial solutions.
          </p>
          <Button
            onClick={scrollToContent}
            variant="ghost"
            className="mt-12 animate-bounce"
          >
            <ChevronDown className="h-8 w-8 text-aires-navy" />
          </Button>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <h2 className="text-4xl font-semibold bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent text-center">
            Who We Are
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-aires-navy/80 leading-relaxed">
                With over a decade of experience in investment management, we specialize in creating tailored investment solutions 
                that align with our clients' unique financial goals and risk preferences.
              </p>
              <p className="text-lg text-aires-navy/80 leading-relaxed">
                Our approach combines deep market insights with innovative strategies to deliver exceptional value to our clients.
              </p>
            </div>
            <div className="bg-gradient-to-br from-aires-navy/5 to-aires-blue/5 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-aires-navy mb-4">Our Values</h3>
              <ul className="space-y-4 text-aires-navy/80">
                <li>• Excellence in Investment Management</li>
                <li>• Client-Centric Approach</li>
                <li>• Transparency and Trust</li>
                <li>• Long-term Partnership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-semibold bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent text-center mb-16">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-aires-navy/10">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent mb-4">
                Investment Advisory
              </h3>
              <p className="text-aires-navy/80 leading-relaxed">
                Comprehensive investment guidance tailored to your unique financial goals and risk tolerance.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-aires-navy/10">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent mb-4">
                Portfolio Management
              </h3>
              <p className="text-aires-navy/80 leading-relaxed">
                Active portfolio management focused on long-term growth and risk-adjusted returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-semibold bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent text-center mb-16">
            Investment Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent mb-4">
                Private Equity Funds
              </h3>
              <p className="text-aires-navy/80 leading-relaxed">
                Access to exclusive private equity opportunities with potential for superior returns.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent mb-4">
                Custom Investment Solutions
              </h3>
              <p className="text-aires-navy/80 leading-relaxed">
                Tailored investment strategies designed to meet your specific financial objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent mb-8">
            Get In Touch
          </h2>
          <p className="text-lg text-aires-navy/80 mb-12">
            Connect with our team to discuss how we can help achieve your investment goals.
          </p>
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg mx-auto">
            <p className="text-aires-navy/80 mb-4">Email: quinley.martini@aries76.com</p>
            <Button
              onClick={() => generatePDF('website-presentation', 'Aires-Capital-Presentation.pdf')}
              className="bg-gradient-to-r from-aires-navy to-aires-blue text-white font-medium px-6 py-2 rounded-lg flex items-center gap-2 mx-auto"
              size="lg"
            >
              <FileText className="w-5 h-5" />
              Download Presentation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsitePresentation;
