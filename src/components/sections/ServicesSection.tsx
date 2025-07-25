
import { useInView } from "react-intersection-observer";
import { Database, Zap, Bot } from "lucide-react";

const ServicesSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section 
      id="services" 
      ref={ref}
      className={`py-20 px-4 bg-background transition-all duration-700 transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            How AIRES Revolutionizes Fundraising
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            AIRES streamlines the capital raising process through data-driven intelligence and automated outreach, ensuring fund managers maximize their engagement and conversion rates effectively in the modern fundraising landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Database className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Data Input</h3>
            <p className="text-muted-foreground">
              Seamless integration of relevant investor data streamlines the process.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Bot className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">AI Enrichment</h3>
            <p className="text-muted-foreground">
              Enhanced insights derived from AI improve investor targeting capabilities.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Smart Outreach</h3>
            <p className="text-muted-foreground">
              Automated outreach strategies ensure timely and personalized communication.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/0f080589-670e-4ed6-9c2f-abe516b1b67e.png"
            alt="How AIRES Revolutionizes Fundraising"
            className="w-full max-w-4xl h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
