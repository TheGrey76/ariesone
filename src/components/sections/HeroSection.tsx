
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";

const HeroSection = ({ onExploreClick }: { onExploreClick: () => void }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-background overflow-hidden relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className={`transition-all duration-700 transform ${
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6">
            AIRES: <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Reinventing Capital Raising
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            Where AI meets private markets to unlock smarter, faster, data-driven fundraising.
            Our innovative solutions directly address the challenges faced by fund managers and investors, creating a seamless fundraising experience that enhances efficiency and success.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 transform hover:scale-105"
            onClick={onExploreClick}
          >
            Explore Our Solutions <ArrowRight className="ml-2" />
          </Button>
        </div>
        
        <div className={`transition-all duration-700 transform delay-300 ${
          inView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        }`}>
          <div className="relative">
            <img 
              src="/lovable-uploads/08233744-668b-4f72-bce6-64be07676fab.png"
              alt="AIRES Fundraising Technology"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
