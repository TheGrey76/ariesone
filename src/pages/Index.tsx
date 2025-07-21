
import HeroSection from "@/components/sections/HeroSection";
import BrokenLandscapeSection from "@/components/sections/BrokenLandscapeSection";
import VisionSection from "@/components/sections/VisionSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import BrochureDownload from "@/components/BrochureDownload";
import ContactSection from "@/components/sections/ContactSection";

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
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <section id="brochure" className="py-16 bg-card">
        <BrochureDownload />
      </section>
      <ContactSection />
    </div>
  );
};

export default Index;
