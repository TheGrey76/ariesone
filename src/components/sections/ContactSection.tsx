
import { useInView } from "react-intersection-observer";
import ContactForm from "@/components/ContactForm";

const ContactSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section 
      id="contact" 
      ref={ref}
      className={`py-20 px-4 relative transition-all duration-700 transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-aires-navy/5 to-aires-emerald/5" />
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-aires-navy mb-6 text-center">
          The Future of Capital Raising is Here
        </h2>
        <p className="text-lg text-aires-gray text-center mb-12 max-w-2xl mx-auto">
          Are you ready to revolutionize your fundraising strategy with AI and smart data? Let's redefine capital raising together.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4 text-aires-navy">
              Our Office
            </h3>
            <address className="not-italic text-sm text-aires-navy space-y-1">
              <p className="font-semibold">AIRES</p>
              <p className="text-xs text-aires-gray italic mb-4">A brand owned by Aries76 Ltd Holding</p>
              <p>27, Old Gloucester Street</p>
              <p>LONDON WC1N 3AX</p>
              <p>UNITED KINGDOM</p>
              <p className="mt-2 text-xs">Company Registration number: 15324504</p>
            </address>
          </div>
          <div className="w-full max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
