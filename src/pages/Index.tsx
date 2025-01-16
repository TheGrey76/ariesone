import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Target, LineChart } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Index = () => {
  const navigate = useNavigate();
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.1 });
  const { ref: whoIAmRef, inView: whoIAmInView } = useInView({ threshold: 0.1 });
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.1 });

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
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
            Empowering Data-Driven Financial Solutions
          </h1>
          <p className="text-lg md:text-xl bg-gradient-to-r from-aires-gray to-aires-navy bg-clip-text text-transparent mb-8 max-w-2xl mx-auto animate-fade-up">
            Strategic advisory and sponsorship for innovative financial instruments.
          </p>
          <Button
            size="lg"
            className="bg-aires-navy hover:bg-aires-blue transition-all duration-300 transform hover:scale-105 animate-fade-up"
            onClick={scrollToAbout}
          >
            Learn More <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      <section 
        id="about" 
        ref={aboutRef}
        className={`py-32 px-4 relative transition-all duration-700 transform ${
          aboutInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[url('/lovable-uploads/51149253-a392-4fb8-8ab0-e82c839c0455.png')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-white/50" />
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-aires-navy mb-12 text-center">
            Who We Are
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Trust",
                description: "Building lasting relationships through transparency and reliability."
              },
              {
                icon: Brain,
                title: "Innovation",
                description: "Pioneering new solutions in financial products and services."
              },
              {
                icon: LineChart,
                title: "Data-Driven",
                description: "Making informed decisions backed by comprehensive analysis."
              }
            ].map((card, index) => (
              <div 
                key={card.title}
                className="p-6 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  opacity: aboutInView ? 1 : 0,
                  transform: aboutInView ? "translateY(0)" : "translateY(20px)"
                }}
              >
                <div className="bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald p-0.5 rounded-full w-16 h-16 mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                  <div className="bg-white rounded-full p-3 h-full">
                    <card.icon className="w-full h-full text-aires-emerald" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">
                  {card.title}
                </h3>
                <p className="text-aires-gray">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="who-i-am" 
        ref={whoIAmRef}
        className={`py-20 px-4 relative transition-all duration-700 transform ${
          whoIAmInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[url('/lovable-uploads/51149253-a392-4fb8-8ab0-e82c839c0455.png')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-white/50" />
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-aires-navy mb-4 text-center">
            Who I Am
          </h2>
          <h3 className="text-xl md:text-2xl font-heading font-medium text-left mb-8 pl-4 border-l-4 border-gradient-to-b from-aires-emerald to-aires-blue animate-fade-up bg-gradient-to-r from-aires-emerald to-aires-blue bg-clip-text text-transparent w-fit">
            Edoardo Grigione
          </h3>
          <div className="prose prose-lg max-w-none space-y-6 text-aires-gray">
            <p>
              In my current role as a partner, my focus has solidified around capital raising, where I play a critical part in driving the financial architecture of VC and PE deals. My efforts are concentrated on securing strategic funding that aligns with our investment philosophy and enhances the long-term value of our portfolio companies.
            </p>
            <p>
              The analytical skills I've honed over the years have become essential tools in this process, enabling me to assess and mitigate financial risks effectively. My ability to identify optimal investment opportunities and structure deals that balance risk and reward is central to my contribution to our firm's success.
            </p>
            <p>
              I am passionate about tackling challenges in Investor Relations and fundraising. Throughout my career, I've approached complex problems head-on, consistently delivering results that exceed expectations. By fostering strong partnerships and setting clear goals, I've driven successful projects that create real, lasting value.
            </p>
            <p>
              My journey has taken me across continents, working in international business to help companies grow in new markets and build solid relationships with investors. This experience has deepened my understanding of cultural differences and how to effectively expand operations across borders.
            </p>
            <p>
              Beyond technical expertise, I believe in the power of sophisticated relationships that combine human insight with a data-driven approach. By leveraging both intuitive human connections and rigorous data analysis, I create holistic strategies that drive impactful outcomes.
            </p>
            <p>
              I thrive in dynamic environments, combining strategic thinking with a hands-on approach to bring ideas to life. My drive is to help businesses grow, innovate, and create meaningful value for all stakeholders.
            </p>
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
        <div className="absolute inset-0 bg-[url('/lovable-uploads/51149253-a392-4fb8-8ab0-e82c839c0455.png')] bg-cover bg-fixed bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50" />
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-aires-navy mb-12 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Sponsorship",
                description: "We work with leading financial issuers to structure and launch innovative investment products.",
                onClick: () => navigate('/sponsorship')
              },
              {
                title: "Advisory",
                description: "Strategic advisory services for portfolio optimization and market opportunities.",
                onClick: () => navigate('/advisory')
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
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-aires-gray mb-4">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  className="hover:text-aires-blue transition-all duration-300 hover:scale-105"
                  onClick={service.onClick}
                >
                  Learn More <ArrowRight className="ml-2" />
                </Button>
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
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-aires-navy/5 to-aires-emerald/5" />
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-aires-navy mb-12 text-center">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-8 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-aires-navy">
                Our Office
              </h3>
              <address className="not-italic text-sm text-aires-navy space-y-1">
                <p className="font-semibold">Aries Data Ltd</p>
                <p className="text-xs text-aires-gray italic mb-4">A company owned by Aries76 Ltd Holding</p>
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
