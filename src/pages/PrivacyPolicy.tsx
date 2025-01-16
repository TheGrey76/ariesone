import Navigation from "@/components/Navigation";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-3xl font-heading font-bold text-aires-navy mb-8">Privacy Policy</h1>
        <div className="prose prose-lg">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-aires-navy mb-4">1. Introduction</h2>
            <p>
              AIRES ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-aires-navy mb-4">2. Information We Collect</h2>
            <p>We collect information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Contact us through our website</li>
              <li>Subscribe to our newsletter</li>
              <li>Request information about our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-aires-navy mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Respond to your inquiries</li>
              <li>Send you updates and marketing communications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-aires-navy mb-4">4. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              AIRES
              <br />
              27, Old Gloucester Street
              <br />
              LONDON WC1N 3AX
              <br />
              UNITED KINGDOM
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;