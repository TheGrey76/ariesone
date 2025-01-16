import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Target, LineChart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/51149253-a392-4fb8-8ab0-e82c839c0455.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50" />
        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-5xl md:text-7xl font-heading font-bold bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald bg-clip-text text-transparent mb-2 animate-fade-up">
            Empowering Data-Driven Financial Solutions
          </h1>
          <p className="text-2xl font-heading font-semibold bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent mb-6 animate-fade-up">
            Data Driven Decision
          </p>
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
      <section id="about" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/51149253-a392-4fb8-8ab0-e82c839c0455.png')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-white/50" />
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-aires-navy mb-12 text-center">
            Who We Are
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg">
              <div className="bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald p-0.5 rounded-full w-16 h-16 mx-auto mb-4">
                <div className="bg-white rounded-full p-3 h-full">
                  <Target className="w-full h-full text-aires-emerald" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">Trust</h3>
              <p className="text-aires-gray">
                Building lasting relationships through transparency and reliability.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg">
              <div className="bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald p-0.5 rounded-full w-16 h-16 mx-auto mb-4">
                <div className="bg-white rounded-full p-3 h-full">
                  <Brain className="w-full h-full text-aires-emerald" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">Innovation</h3>
              <p className="text-aires-gray">
                Pioneering new solutions in financial products and services.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg">
              <div className="bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald p-0.5 rounded-full w-16 h-16 mx-auto mb-4">
                <div className="bg-white rounded-full p-3 h-full">
                  <LineChart className="w-full h-full text-aires-emerald" />
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
      <section id="services" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/51149253-a392-4fb8-8ab0-e82c839c0455.png')] bg-cover bg-fixed bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50" />
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-aires-navy mb-12 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">Sponsorship</h3>
              <p className="text-aires-gray mb-4">
                We work with leading financial issuers to structure and launch innovative investment products.
              </p>
              <Button variant="outline" className="hover:text-aires-blue">
                Learn More <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="p-8 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg">
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
      <section id="contact" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-aires-navy/5 to-aires-emerald/5" />
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-aires-navy mb-12 text-center">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">
                Our Office
              </h3>
              <address className="not-italic text-aires-gray space-y-2">
                <p className="font-bold">Aries76 Ltd</p>
                <p>27, Old Gloucester Street</p>
                <p>LONDON WC1N 3AX</p>
                <p>UNITED KINGDOM</p>
                <p className="mt-4">Company Registration number: 15324504</p>
              </address>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;