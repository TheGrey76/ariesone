import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Brain, Target, LineChart, ArrowRight, Linkedin } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Index = () => {
  const navigate = useNavigate();
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.1 });
  const { ref: whoIAmRef, inView: whoIAmInView } = useInView({ threshold: 0.1 });
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.1 });

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/edoardogrigione/", "_blank");
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section 
        ref={heroRef}
        className={`min-h-screen flex items-center justify-center px-4 relative bg-white transition-opacity duration-700 ${
          heroInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[url('/lovable-uploads/51149253-a392-4fb8-8ab0-e82c839c0455.png')] bg-cover bg-center opacity-10 transform scale-105 transition-transform duration-1000" 
             style={{ transform: heroInView ? "scale(1)" : "scale(1.05)" }} />
        <div className="absolute inset-0 bg-white" />
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
        className={`py-32 px-4 relative bg-white transition-all duration-700 transform ${
          aboutInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[url('/lovable-uploads/51149253-a392-4fb8-8ab0-e82c839c0455.png')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-white" />
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
        className={`py-20 px-4 relative bg-white transition-all duration-700 transform ${
          whoIAmInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[url('/lovable-uploads/51149253-a392-4fb8-8ab0-e82c839c0455.png')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-white" />
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-aires-navy mb-4 text-center">
            Who I Am
          </h2>
          <div className="flex items-center gap-2 pl-4 border-l-4 border-gradient-to-b from-aires-emerald to-aires-blue mb-8">
            <h3 className="text-xl md:text-2xl font-heading font-medium bg-gradient-to-r from-aires-emerald to-aires-blue bg-clip-text text-transparent">
              Edoardo Grigione
            </h3>
            <button
              onClick={handleLinkedInClick}
              className="p-1 rounded-full hover:bg-aires-blue/10 transition-colors"
              aria-label="Visit LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-[#0A66C2]" />
            </button>
          </div>
          <div className="prose prose-lg max-w-none space-y-6 text-aires-gray">
            <p>
              In my role as a partner, I specialize in capital raising, crafting the financial strategies that fuel successful venture capital (VC) and private equity (PE) deals. My focus is on securing strategic funding that aligns with our investment philosophy and enhances the long-term value of our portfolio companies.
            </p>
            <p>
              My career has taken me across the globe, giving me the opportunity to work in major financial hubs. In New York, I raised over $200 million for my hedge fund, working with institutional investors and private clients. In Switzerland, the UK, and Italy, I've built strong investor networks and driven funding efforts that have helped businesses grow and scale.
            </p>
            <p>
              Over the years, I've developed analytical skills that are vital for spotting investment opportunities, assessing financial risks, and structuring deals that balance risk and reward. I don't just crunch numbers—I design deals that deliver real value for all parties involved.
            </p>
            <p>
              I'm passionate about tackling challenges in investor relations and fundraising. Throughout my career, I've taken on complex problems and consistently delivered results that exceed expectations. By building strong partnerships and setting clear goals, I've been able to drive projects that create lasting impact.
            </p>
            <p>
              My international experience has deepened my understanding of cultural differences and how to navigate them effectively. I've worked across continents, helping companies expand into new markets and build meaningful relationships with investors.
            </p>
            <p>
              Beyond the technical side, I believe in the power of relationships. By combining human insight with a data-driven approach, I create strategies that don't just meet goals—they push boundaries and deliver impactful results.
            </p>
            <p>
              I thrive in fast-paced, dynamic environments where I can think strategically, roll up my sleeves, and make things happen. Whether it's VC and PE fundraising, hedge fund capital raising, or international business development, I'm driven by the opportunity to create value and make an impact.
            </p>
          </div>
        </div>
      </section>

      <section 
        id="services" 
        ref={servicesRef}
        className={`py-20 px-4 relative bg-white transition-all duration-700 transform ${
          servicesInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[url('/lovable-uploads/51149253-a392-4fb8-8ab0-e82c839c0455.png')] bg-cover bg-fixed bg-center opacity-5" />
        <div className="absolute inset-0 bg-white" />
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-aires-navy mb-12 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className="p-8 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">
                Sponsorship
              </h3>
              <p className="text-aires-gray mb-6">
                We collaborate with leading financial issuers to design and launch innovative investment products. Our comprehensive approach includes:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-aires-navy to-aires-emerald flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="ml-3 text-aires-gray">Product structuring and development</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-aires-navy to-aires-emerald flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="ml-3 text-aires-gray">Regulatory compliance guidance</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-aires-navy to-aires-emerald flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="ml-3 text-aires-gray">Market entry strategy</span>
                </li>
              </ul>
              <Button 
                variant="outline" 
                className="hover:text-aires-blue transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/sponsorship')}
              >
                Learn More <ArrowRight className="ml-2" />
              </Button>
            </div>

            <div 
              className="p-8 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">
                Advisory
              </h3>
              <p className="text-aires-gray mb-6">
                Strategic advisory services focused on portfolio optimization and market opportunities, specializing in:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-aires-navy to-aires-emerald flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="ml-3 text-aires-gray">Private equity and venture capital fund advisory</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-aires-navy to-aires-emerald flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="ml-3 text-aires-gray">Portfolio performance optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-aires-navy to-aires-emerald flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="ml-3 text-aires-gray">Market opportunity analysis</span>
                </li>
              </ul>
              <Button 
                variant="outline" 
                className="hover:text-aires-blue transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/advisory')}
              >
                Learn More <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="contact" 
        ref={contactRef}
        className={`py-20 px-4 relative bg-white transition-all duration-700 transform ${
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
