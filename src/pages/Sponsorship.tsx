import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sponsorship = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <Button
          variant="ghost"
          className="mb-8 hover:bg-transparent hover:text-aires-blue"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        <h1 className="text-4xl font-heading font-bold text-aires-navy mb-8">
          Sponsorship
        </h1>

        <div className="space-y-6 text-left">
          <p className="text-aires-gray">
            At the heart of our operations is a commitment to collaboration and innovation. We partner with leading financial issuers to design, structure, and launch cutting-edge investment products tailored to meet the evolving needs of investors. Our approach to sponsorship involves more than just offering expertise; it's about creating solutions that unlock new opportunities and deliver measurable value.
          </p>
          
          <p className="text-aires-gray">
            We leverage our deep industry knowledge and extensive network to navigate the complexities of product development. Whether it's crafting bespoke investment vehicles or working on large-scale initiatives, we focus on delivering offerings that are both innovative and compliant with the highest regulatory standards.
          </p>

          <div>
            <h3 className="text-2xl font-heading font-semibold text-aires-navy mb-6">
              Our sponsorship framework includes:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Collaborative Structuring",
                  description: "Partnering with issuers to co-create products that align with market demands and investor expectations."
                },
                {
                  title: "End-to-End Support",
                  description: "Providing guidance from conceptualization through to the successful launch of the product, including legal, financial, and operational insights."
                },
                {
                  title: "Market Intelligence",
                  description: "Leveraging our insights into emerging trends and sectors to ensure our products remain at the forefront of the industry."
                },
                {
                  title: "Global Reach",
                  description: "Connecting issuers with investors across geographies, facilitating seamless entry into new markets."
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h4 className="font-semibold text-aires-blue mb-3">{item.title}</h4>
                  <p className="text-aires-gray">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-aires-gray mt-8">
            With a strong focus on quality, innovation, and strategic partnerships, we ensure that every product we sponsor becomes a powerful tool for achieving both institutional and individual investment goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;