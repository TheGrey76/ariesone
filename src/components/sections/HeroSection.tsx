
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";

const HeroSection = ({ onExploreClick }: { onExploreClick: () => void }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 relative transition-opacity duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-[url('/lovable-uploads/51149253-a392-4fb8-8ab0-e82c839c0455.png')] bg-cover bg-center opacity-10 transform scale-105 transition-transform duration-1000" 
           style={{ transform: inView ? "scale(1)" : "scale(1.05)" }} />
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50" />
      <div className="max-w-7xl mx-auto text-center relative">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-aires-blue mb-6 animate-fade-up">
          AIRES
        </h1>
        <div className="mb-2 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-heading">
            <span className="text-aires-navy">Reinventing Capital Raising </span>
            <span className="text-aires-emerald">with</span>
            <br className="hidden sm:block" />
            <span className="text-aires-blue"> AI & Data</span>
          </h2>
        </div>
        <p className="text-lg text-aires-gray mb-8 max-w-4xl mx-auto animate-fade-up">
          Empowering Fundraising Through AI-Driven Insights & Smart Data
        </p>
        <Button
          size="lg"
          className="bg-aires-navy hover:bg-aires-blue transition-all duration-300 transform hover:scale-105 animate-fade-up"
          onClick={onExploreClick}
        >
          Explore Our Solutions <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
