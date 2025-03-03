
import { useInView } from "react-intersection-observer";

const ServicesSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section 
      id="services" 
      ref={ref}
      className={`py-20 px-4 relative transition-all duration-700 transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50" />
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-aires-navy mb-12 text-center">
          Transformative Solutions
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Fund Placement 2.0",
              description: "We go beyond traditional placement agent services by using AI-powered investor profiling and sentiment analysis to match the right funds with the right investors—enhancing efficiency, precision, and conversion rates."
            },
            {
              title: "AI-Powered Secondary Advisory",
              description: "Our data-driven approach enables real-time market intelligence on secondary transactions, helping LPs optimize liquidity decisions with enhanced visibility into pricing, demand trends, and potential counterparties."
            },
            {
              title: "GP Capital Advisory with Smart Data",
              description: "We provide AI-enhanced structuring solutions, leveraging deep data analytics to support GP-led transactions, NAV financing, and bespoke capital solutions—maximizing returns while minimizing risk."
            },
            {
              title: "Sustainable Investing Advisory",
              description: "Our AI-driven ESG analytics assess impact investing opportunities, ensuring that funds align with both financial performance and sustainability goals, backed by quantifiable data insights."
            }
          ].map((service, index) => (
            <div 
              key={service.title}
              className="p-8 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)"
              }}
            >
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">
                {service.title}
              </h3>
              <p className="text-aires-gray">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
