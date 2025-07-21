
import { useInView } from "react-intersection-observer";
import { Bot, Target, TrendingUp } from "lucide-react";

const WhyUsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      className={`py-20 px-4 bg-card transition-all duration-700 transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Why We Win
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            AIRES is not another SaaS tool. It's built for one job: closing capital
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            The rise of AI in private markets is transforming fundraising. Limited Partners (LPs) now expect tailored approaches, while General Partners (GPs) face increasing pressure to deliver results. AIRES meets this critical inflection point.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-background border border-border rounded-xl p-8 text-left">
            <h3 className="text-xl font-bold text-foreground mb-4">AI Adoption</h3>
            <p className="text-muted-foreground">
              AI is rapidly becoming essential in modern fundraising strategies.
            </p>
          </div>
          
          <div className="bg-background border border-border rounded-xl p-8 text-left">
            <h3 className="text-xl font-bold text-foreground mb-4">Curated Approaches</h3>
            <p className="text-muted-foreground">
              LPs demand more personalized and relevant deal opportunities than ever.
            </p>
          </div>
          
          <div className="bg-background border border-border rounded-xl p-8 text-left">
            <h3 className="text-xl font-bold text-foreground mb-4">Increased Pressure</h3>
            <p className="text-muted-foreground">
              GPs must adapt quickly to shifting market expectations and challenges.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/2f8e1a5a-3776-4a7f-9e02-578fac44bf3f.png"
            alt="Why We Win"
            className="w-full max-w-4xl h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
