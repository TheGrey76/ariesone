
import { useInView } from "react-intersection-observer";
import { CircuitBoard, Database, Network } from "lucide-react";

const AboutSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      className={`py-32 px-4 relative transition-all duration-700 transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-[url('/lovable-uploads/51149253-a392-4fb8-8ab0-e82c839c0455.png')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-blue-50/80" />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <CircuitBoard className="w-8 h-8 text-aires-navy mb-4 flex-shrink-0" />
              <p className="text-lg text-aires-gray flex-grow">
                At Aires Data, we are redefining capital raising by integrating Artificial Intelligence and data-driven decision-making into every stage of the fundraising process.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <Database className="w-8 h-8 text-aires-emerald mb-4 flex-shrink-0" />
              <p className="text-lg text-aires-gray flex-grow">
                Traditional models rely on networks and manual outreach—we leverage technology to optimize investor targeting, enhance engagement, and accelerate deal execution.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <Network className="w-8 h-8 text-aires-blue mb-4 flex-shrink-0" />
              <p className="text-lg text-aires-gray flex-grow">
                By harnessing AI-powered analytics, investor intelligence, and predictive modeling, Aires Data empowers fund managers, investors, and financial sponsors with faster, smarter, and more efficient capital-raising solutions.
              </p>
            </div>
            
            <div className="relative flex flex-col">
              <div className="absolute -inset-1 bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald rounded-xl blur-md opacity-30"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4 flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-aires-navy"></div>
                  <div className="h-2 w-2 rounded-full bg-aires-blue"></div>
                  <div className="h-2 w-2 rounded-full bg-aires-emerald"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent flex-shrink-0">
                  The Future of Capital Raising
                </h3>
                <p className="text-aires-gray flex-grow">
                  Experience the next generation of fundraising with our AI-powered platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
