import Navigation from "@/components/Navigation";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-3xl font-heading font-bold text-aires-navy mb-8">Terms & Conditions</h1>
        <div className="prose prose-lg">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-aires-navy mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing our website, you agree to be bound by these Terms and Conditions and agree that you are responsible for compliance with any applicable local laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-aires-navy mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on AIRES's website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-aires-navy mb-4">3. Disclaimer</h2>
            <p>
              The materials on AIRES's website are provided on an 'as is' basis. AIRES makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-aires-navy mb-4">4. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;