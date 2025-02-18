
import Navigation from "@/components/Navigation";

const PrivacyPolicy = () => {
  const isDevelopment = import.meta.env.DEV;

  return (
    <div className="min-h-screen bg-white">
      <Navigation isDevelopment={isDevelopment} />
      <div className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-3xl font-heading font-bold text-aires-navy mb-8">Privacy Policy</h1>
        <div className="prose prose-lg">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-aires-navy mb-4">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, information we obtain automatically when you use our services, and information from other sources.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-aires-navy mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect AIRES and our users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-aires-navy mb-4">3. Information Sharing</h2>
            <p>
              We do not share your personal information with companies, organizations, or individuals outside of AIRES except in the following cases: with your consent, with domain administrators, for external processing, or for legal reasons.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-aires-navy mb-4">4. Data Security</h2>
            <p>
              We work hard to protect AIRES and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
