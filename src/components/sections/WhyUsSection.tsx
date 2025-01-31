
import { useInView } from "react-intersection-observer";
import { Brain, LineChart, Rocket, Shield } from "lucide-react";

const WhyUsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      className={`py-20 px-4 relative transition-all duration-700 transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)"
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
  );
};

export default WhyUsSection;
