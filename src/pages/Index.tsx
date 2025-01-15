import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, BarChart2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald bg-clip-text text-transparent mb-6 animate-fade-up">
            Empowering Data-Driven Financial Solutions
          </h1>
          <p className="text-lg md:text-xl bg-gradient-to-r from-aires-gray to-aires-navy bg-clip-text text-transparent mb-8 max-w-2xl mx-auto animate-fade-up">
            Strategic advisory and sponsorship for innovative financial instruments.
          </p>
          <Button
            size="lg"
            className="bg-aires-navy hover:bg-aires-blue transition-colors animate-fade-up"
          >
            Learn More <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-aires-navy mb-12 text-center">
            Who We Are
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <div className="bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald p-0.5 rounded-full w-16 h-16 mx-auto mb-4">
                <div className="bg-white rounded-full p-3 h-full">
                  <Shield className="w-full h-full text-aires-emerald" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">Trust</h3>
              <p className="text-aires-gray">
                Building lasting relationships through transparency and reliability.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <div className="bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald p-0.5 rounded-full w-16 h-16 mx-auto mb-4">
                <div className="bg-white rounded-full p-3 h-full">
                  <Zap className="w-full h-full text-aires-emerald" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">Innovation</h3>
              <p className="text-aires-gray">
                Pioneering new solutions in financial products and services.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <div className="bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald p-0.5 rounded-full w-16 h-16 mx-auto mb-4">
                <div className="bg-white rounded-full p-3 h-full">
                  <BarChart2 className="w-full h-full text-aires-emerald" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">Data-Driven</h3>
              <p className="text-aires-gray">
                Making informed decisions backed by comprehensive analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-aires-navy mb-12 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg bg-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">Sponsorship</h3>
              <p className="text-aires-gray mb-4">
                We work with leading financial issuers to structure and launch innovative investment products.
              </p>
              <Button variant="outline" className="hover:text-aires-blue">
                Learn More <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="p-8 rounded-lg bg-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">Advisory</h3>
              <p className="text-aires-gray mb-4">
                Strategic advisory services for portfolio optimization and market opportunities.
              </p>
              <Button variant="outline" className="hover:text-aires-blue">
                Learn More <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-aires-navy/5 to-aires-emerald/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-aires-navy mb-12 text-center">
            Get in Touch
          </h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Index;
