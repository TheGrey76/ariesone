
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="pt-20">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
