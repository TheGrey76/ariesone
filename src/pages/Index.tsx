
import HeroSection from "@/components/sections/HeroSection";
import BrokenLandscapeSection from "@/components/sections/BrokenLandscapeSection";
import VisionSection from "@/components/sections/VisionSection";

import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import BrochureDownload from "@/components/BrochureDownload";


const Index = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20">
      <HeroSection onExploreClick={scrollToServices} />
      <BrokenLandscapeSection />
      <VisionSection />
      
      <ServicesSection />
      <WhyUsSection />
      <section id="brochure" className="py-16 bg-card">
        <BrochureDownload />
      </section>
      
    </div>
  );
};

export default Index;
