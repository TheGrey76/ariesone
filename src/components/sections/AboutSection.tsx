
import { useInView } from "react-intersection-observer";
import { CircuitBoard, Database, Network } from "lucide-react";

const AboutSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      className={`py-20 px-4 relative transition-all duration-700 transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50" />
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-aires-navy mb-12 text-center">
          Our AI-Driven Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[
            {
              icon: CircuitBoard,
              title: "AI Integration",
              description: "At Aires Data, we are redefining capital raising by integrating Artificial Intelligence and data-driven decision-making into every stage of the fundraising process.",
              iconColor: "text-aires-navy"
            },
            {
              icon: Database,
              title: "Data-Driven Solutions",
              description: "Traditional models rely on networks and manual outreach—we leverage technology to optimize investor targeting, enhance engagement, and accelerate deal execution.",
              iconColor: "text-aires-emerald"
            },
            {
              icon: Network,
              title: "Smart Analytics",
              description: "By harnessing AI-powered analytics, investor intelligence, and predictive modeling, Aires Data empowers fund managers, investors, and financial sponsors with faster, smarter, and more efficient capital-raising solutions.",
              iconColor: "text-aires-blue"
            },
            {
              title: "The Future of Capital Raising",
              description: "Experience the next generation of fundraising with our AI-powered platform.",
              special: true
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full ${
                item.special
                  ? "relative"
                  : "bg-white/80 backdrop-blur-sm shadow-lg"
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)"
              }}
            >
              {item.special ? (
                <>
                  <div className="absolute -inset-1 bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald rounded-lg blur-md opacity-30" />
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-lg p-8 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-2 w-2 rounded-full bg-aires-navy" />
                      <div className="h-2 w-2 rounded-full bg-aires-blue" />
                      <div className="h-2 w-2 rounded-full bg-aires-emerald" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">
                      {item.title}
                    </h3>
                    <p className="text-aires-gray">{item.description}</p>
                  </div>
                </>
              ) : (
                <>
                  {item.icon && (
                    <item.icon className={`w-8 h-8 ${item.iconColor} mb-4`} />
                  )}
                  <h3 className="text-xl font-bold mb-4 text-aires-navy">
                    {item.title}
                  </h3>
                  <p className="text-aires-gray">{item.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
