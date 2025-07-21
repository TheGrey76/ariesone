import { useInView } from "react-intersection-observer";
import { AlertTriangle, UserX, Database } from "lucide-react";

const PainPointsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      className={`py-20 px-4 bg-background transition-all duration-700 transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            GP/LP Pain
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Fundraising today is inefficient and often frustrating for all parties involved.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            AIRES provides tools that streamline processes and enhance engagement.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We envision a landscape where capital raising is transformed through intelligent insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="/lovable-uploads/91a82ca3-d797-42cf-8224-a45e1f3e43c8.png"
              alt="GP/LP Pain Points"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center mb-4">
                <UserX className="w-8 h-8 text-primary mr-4" />
                <h3 className="text-xl font-bold text-foreground">Inefficient Outreach</h3>
              </div>
              <p className="text-muted-foreground">
                GP teams struggle with cold outreach efforts that yield minimal results.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-8 h-8 text-accent mr-4" />
                <h3 className="text-xl font-bold text-foreground">Overwhelmed LPs</h3>
              </div>
              <p className="text-muted-foreground">
                LPs face information overload, making it difficult to evaluate opportunities effectively.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Database className="w-8 h-8 text-destructive mr-4" />
                <h3 className="text-xl font-bold text-foreground">Lack of Intelligence</h3>
              </div>
              <p className="text-muted-foreground">
                There is no structured data to bridge the information gap between GPs and LPs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;