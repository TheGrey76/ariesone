
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Advisory = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <Button
            variant="ghost"
            className="hover:bg-transparent hover:text-aires-blue"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <div className="flex flex-col items-end">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/517b8cb3-5d1d-4535-9aa8-00db40ad6258.png" 
                alt="AIRES Logo" 
                className="h-8 mr-2"
              />
              <a href="/" className="text-2xl font-heading font-semibold bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald bg-clip-text text-transparent">
                AIRES
              </a>
            </div>
            <span className="text-sm font-heading font-semibold bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">
              Data Driven Decision
            </span>
          </div>
        </div>

        <h1 className="text-4xl font-heading font-bold text-aires-navy mb-8">
          Advisory
        </h1>

        <div className="space-y-6 text-left">
          <p className="text-base text-aires-gray leading-relaxed">
            Our advisory services are designed to empower clients with strategic insights and actionable solutions that drive growth and maximize value. We specialize in providing comprehensive guidance on portfolio optimization and identifying market opportunities, with a particular focus on private equity and venture capital funds.
          </p>
          
          <p className="text-base text-aires-gray leading-relaxed">
            We understand that navigating the complexities of today's investment landscape requires a combination of expertise, foresight, and adaptability. Our team works closely with clients to develop tailored strategies that align with their unique objectives and deliver measurable results.
          </p>

          <div className="mt-12">
            <h3 className="text-2xl font-heading font-semibold text-aires-navy mb-6">
              Our advisory services include:
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="text-lg font-semibold text-aires-blue mb-4">Portfolio Optimization</h4>
                <ul className="list-disc pl-6 space-y-2 text-base text-aires-gray">
                  <li>Analyzing current investments to identify underperforming assets and opportunities for value creation.</li>
                  <li>Structuring diversified portfolios to enhance returns while managing risk effectively.</li>
                  <li>Implementing strategies to align portfolio performance with long-term goals.</li>
                </ul>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="text-lg font-semibold text-aires-blue mb-4">Market Opportunity Analysis</h4>
                <ul className="list-disc pl-6 space-y-2 text-base text-aires-gray">
                  <li>Identifying emerging trends, sectors, and geographies with high growth potential.</li>
                  <li>Providing in-depth market research and data-driven recommendations to capitalize on these opportunities.</li>
                  <li>Assisting clients in entering new markets or sectors with confidence and precision.</li>
                </ul>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="text-lg font-semibold text-aires-blue mb-4">Private Equity and Venture Capital Focus</h4>
                <ul className="list-disc pl-6 space-y-2 text-base text-aires-gray">
                  <li>Offering end-to-end advisory services for private equity and venture capital funds.</li>
                  <li>Supporting clients in capital raising, investor relations, and fund performance optimization.</li>
                  <li>Providing strategic guidance on exits, acquisitions, and other value-driving activities.</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-base text-aires-gray leading-relaxed mt-8">
            Our approach combines a deep understanding of financial markets with hands-on experience in executing complex transactions. By acting as a trusted partner, we enable our clients to navigate challenges, seize opportunities, and achieve sustainable success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advisory;
