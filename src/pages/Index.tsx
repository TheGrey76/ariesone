import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Brain, LineChart, Rocket, Shield, ArrowRight, CircuitBoard, Database, Network } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Index = () => {
  const navigate = useNavigate();
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.1 });
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1 });
  const { ref: whyUsRef, inView: whyUsInView } = useInView({ threshold: 0.1 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.1 });

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section 
        ref={heroRef}
        className={`min-h-screen flex items-center justify-center px-4 relative transition-opacity duration-700 ${
          heroInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[url('/lovable-uploads/51149253-a392-4fb8-8ab0-e82c839c0455.png')] bg-cover bg-center opacity-10 transform scale-105 transition-transform duration-1000" 
             style={{ transform: heroInView ? "scale(1)" : "scale(1.05)" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50" />
        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-5xl md:text-7xl font-heading font-bold bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald bg-clip-text text-transparent mb-6 animate-fade-up">
            Reinventing Capital Raising with AI & Data
          </h1>
          <p className="text-lg md:text-xl text-aires-gray mb-8 max-w-3xl mx-auto animate-fade-up">
            Empowering Fundraising Through AI-Driven Insights & Smart Data
          </p>
          <Button
            size="lg"
            className="bg-aires-navy hover:bg-aires-blue transition-all duration-300 transform hover:scale-105 animate-fade-up"
            onClick={scrollToServices}
          >
            Explore Our Solutions <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      <section 
        ref={aboutRef}
        className={`py-32 px-4 relative transition-all duration-700 transform ${
          aboutInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[url('/lovable-uploads/51149253-a392-4fb8-8ab0-e82c839c0455.png')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-blue-50/80" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <CircuitBoard className="w-8 h-8 text-aires-navy mb-4" />
                <p className="text-lg text-aires-gray">
                  At Aires Data, we are redefining capital raising by integrating Artificial Intelligence and data-driven decision-making into every stage of the fundraising process.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <Database className="w-8 h-8 text-aires-emerald mb-4" />
                <p className="text-lg text-aires-gray">
                  Traditional models rely on networks and manual outreach—we leverage technology to optimize investor targeting, enhance engagement, and accelerate deal execution.
                </p>
              </div>
            </div>

            <div className="space-y-8 md:mt-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <Network className="w-8 h-8 text-aires-blue mb-4" />
                <p className="text-lg text-aires-gray">
                  By harnessing AI-powered analytics, investor intelligence, and predictive modeling, Aires Data empowers fund managers, investors, and financial sponsors with faster, smarter, and more efficient capital-raising solutions.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald rounded-xl blur-md opacity-30"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-2 w-2 rounded-full bg-aires-navy"></div>
                    <div className="h-2 w-2 rounded-full bg-aires-blue"></div>
                    <div className="h-2 w-2 rounded-full bg-aires-emerald"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">
                    The Future of Capital Raising
                  </h3>
                  <p className="text-aires-gray">
                    Experience the next generation of fundraising with our AI-powered platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="services" 
        ref={servicesRef}
        className={`py-20 px-4 relative transition-all duration-700 transform ${
          servicesInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50" />
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-aires-navy mb-12 text-center">
            Our AI-Driven Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Fund Placement 2.0",
                description: "We go beyond traditional placement agent services by using AI-powered investor profiling and sentiment analysis to match the right funds with the right investors—enhancing efficiency, precision, and conversion rates."
              },
              {
                title: "AI-Powered Secondary Advisory",
                description: "Our data-driven approach enables real-time market intelligence on secondary transactions, helping LPs optimize liquidity decisions with enhanced visibility into pricing, demand trends, and potential counterparties."
              },
              {
                title: "GP Capital Advisory with Smart Data",
                description: "We provide AI-enhanced structuring solutions, leveraging deep data analytics to support GP-led transactions, NAV financing, and bespoke capital solutions—maximizing returns while minimizing risk."
              },
              {
                title: "Sustainable Investing Advisory",
                description: "Our AI-driven ESG analytics assess impact investing opportunities, ensuring that funds align with both financial performance and sustainability goals, backed by quantifiable data insights."
              }
            ].map((service, index) => (
              <div 
                key={service.title}
                className="p-8 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  opacity: servicesInView ? 1 : 0,
                  transform: servicesInView ? "translateY(0)" : "translateY(20px)"
                }}
              >
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-aires-gray">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        ref={whyUsRef}
        className={`py-20 px-4 relative transition-all duration-700 transform ${
          whyUsInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-white/50" />
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-aires-navy mb-12 text-center">
            Why Aires Data?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "AI & Big Data Integration",
                description: "Smarter capital raising through predictive analytics and automated investor matching."
              },
              {
                icon: LineChart,
                title: "Real-Time Market Intelligence",
                description: "Data-driven insights for better decision-making in fund placements and secondaries."
              },
              {
                icon: Rocket,
                title: "Tech-Enhanced Efficiency",
                description: "Reduce fundraising timelines, improve investor engagement, and maximize outcomes."
              },
              {
                icon: Shield,
                title: "Trust & Transparency",
                description: "AI-powered reporting and compliance tools ensure data-driven accountability."
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  opacity: whyUsInView ? 1 : 0,
                  transform: whyUsInView ? "translateY(0)" : "translateY(20px)"
                }}
              >
                <div className="bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald p-0.5 rounded-full w-16 h-16 mx-auto mb-4">
                  <div className="bg-white rounded-full p-3 h-full">
                    <feature.icon className="w-full h-full text-aires-emerald" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-aires-gray text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="contact" 
        ref={contactRef}
        className={`py-20 px-4 relative transition-all duration-700 transform ${
          contactInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-aires-navy/5 to-aires-emerald/5" />
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-aires-navy mb-6 text-center">
            The Future of Capital Raising is Here
          </h2>
          <p className="text-lg text-aires-gray text-center mb-12 max-w-2xl mx-auto">
            Are you ready to revolutionize your fundraising strategy with AI and smart data? Let's redefine capital raising together.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4 text-aires-navy">
                Our Office
              </h3>
              <address className="not-italic text-sm text-aires-navy space-y-1">
                <p className="font-semibold">AIRES</p>
                <p className="text-xs text-aires-gray italic mb-4">A brand owned by Aries76 Ltd Holding</p>
                <p>27, Old Gloucester Street</p>
                <p>LONDON WC1N 3AX</p>
                <p>UNITED KINGDOM</p>
                <p className="mt-2 text-xs">Company Registration number: 15324504</p>
              </address>
            </div>
            <div className="w-full max-w-xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
