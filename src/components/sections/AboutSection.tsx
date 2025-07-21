
import { useInView } from "react-intersection-observer";
import { User, Target, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section 
      id="about"
      ref={ref}
      className={`py-20 px-4 bg-card transition-all duration-700 transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Intelligent Fundraising Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            At AIRES, we revolutionise capital raising by providing an integrated infrastructure that enhances investor engagement, optimizes workflows, and drives data-informed decision-making, ensuring our clients stay ahead in a dynamic funding environment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 text-center">
            <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <User className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Investor Profiling</h3>
            <p className="text-muted-foreground">
              Tailored profiles help identify the best-fit investors for each opportunity.
            </p>
          </div>
          
          <div className="p-8 text-center">
            <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Target className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Deal Placement</h3>
            <p className="text-muted-foreground">
              We streamline the process, ensuring relevant deals reach the right investors.
            </p>
          </div>
          
          <div className="p-8 text-center">
            <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Analytics</h3>
            <p className="text-muted-foreground">
              Our robust analytics provide insights for informed decision-making and strategy refinement.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/72a65659-54a8-4543-9556-c0ce8304e776.png"
            alt="Intelligent Fundraising Infrastructure"
            className="w-full max-w-4xl h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
