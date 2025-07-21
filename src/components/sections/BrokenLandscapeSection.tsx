import { useInView } from "react-intersection-observer";

const BrokenLandscapeSection = () => {
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
            The Broken Fundraising Landscape
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            Fundraising today is fundamentally broken, leading to inefficiencies and frustrations for both GP teams and LPs in the marketplace.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Addressing these issues is crucial for improving capital flow and aligning expectations between all parties.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card border border-primary rounded-xl p-8 text-left">
            <h3 className="text-xl font-bold text-foreground mb-4">Inefficient Outreach</h3>
            <p className="text-foreground">
              GP teams struggle with cold outreach efforts that yield minimal results.
            </p>
          </div>
          
          <div className="bg-card border border-primary rounded-xl p-8 text-left">
            <h3 className="text-xl font-bold text-foreground mb-4">Overwhelmed LPs</h3>
            <p className="text-foreground">
              LPs face information overload, making it difficult to evaluate opportunities effectively.
            </p>
          </div>
          
          <div className="bg-card border border-primary rounded-xl p-8 text-left">
            <h3 className="text-xl font-bold text-foreground mb-4">Lack of Intelligence</h3>
            <p className="text-foreground">
              There is no structured data to bridge the information gap between GPs and LPs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrokenLandscapeSection;