import { useInView } from "react-intersection-observer";
import { Brain, Zap, Users } from "lucide-react";

const VisionSection = () => {
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
            Our Vision for Capital Raising
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            At AIRES, we believe capital raising can be smarter and more efficient through intelligent data utilisation and automation. Our tools transform how fund managers engage with investors, maximizing both interaction and success in fundraising.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Intelligent Insights</h3>
            <p className="text-muted-foreground">
              AI-powered tools provide deep insights into investor behavior.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Automated Processes</h3>
            <p className="text-muted-foreground">
              Streamlined workflows minimize manual tasks, enhancing productivity.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Enhanced Engagement</h3>
            <p className="text-muted-foreground">
              Our platform maximizes investor engagement and conversion rates.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/c6c08bc7-d151-4f60-938f-c85926de66cf.png"
            alt="Our Vision for Capital Raising"
            className="w-full max-w-4xl h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionSection;