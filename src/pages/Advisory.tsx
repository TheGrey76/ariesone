import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Advisory = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start mb-4">
          <Button
            variant="ghost"
            className="hover:bg-transparent hover:text-aires-blue"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <div className="flex flex-col items-start">
            <a href="/" className="text-xl font-heading font-semibold bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald bg-clip-text text-transparent">
              AIRES
            </a>
            <span className="text-sm font-heading font-semibold bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">
              Data Driven Decision
            </span>
          </div>
        </div>

        <h1 className="text-3xl font-heading font-bold text-aires-navy mb-4">
          Advisory
        </h1>

        <div className="space-y-4 text-left">
          <p className="text-sm text-aires-gray">
            Our advisory services are designed to empower clients with strategic insights and actionable solutions that drive growth and maximize value. We specialize in providing comprehensive guidance on portfolio optimization and identifying market opportunities, with a particular focus on private equity and venture capital funds.
          </p>
          
          <p className="text-sm text-aires-gray">
            We understand that navigating the complexities of today's investment landscape requires a combination of expertise, foresight, and adaptability. Our team works closely with clients to develop tailored strategies that align with their unique objectives and deliver measurable results.
          </p>

          <div>
            <h3 className="text-xl font-heading font-semibold text-aires-navy mb-3">
              Our advisory services include:
            </h3>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="text-base font-semibold text-aires-blue mb-2">Portfolio Optimization</h4>
                <ul className="list-disc pl-4 space-y-1 text-xs text-aires-gray">
                  <li>Analyzing current investments to identify underperforming assets and opportunities for value creation.</li>
                  <li>Structuring diversified portfolios to enhance returns while managing risk effectively.</li>
                  <li>Implementing strategies to align portfolio performance with long-term goals.</li>
                </ul>
              </div>

              <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="text-base font-semibold text-aires-blue mb-2">Market Opportunity Analysis</h4>
                <ul className="list-disc pl-4 space-y-1 text-xs text-aires-gray">
                  <li>Identifying emerging trends, sectors, and geographies with high growth potential.</li>
                  <li>Providing in-depth market research and data-driven recommendations to capitalize on these opportunities.</li>
                  <li>Assisting clients in entering new markets or sectors with confidence and precision.</li>
                </ul>
              </div>

              <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="text-base font-semibold text-aires-blue mb-2">Private Equity and Venture Capital Focus</h4>
                <ul className="list-disc pl-4 space-y-1 text-xs text-aires-gray">
                  <li>Offering end-to-end advisory services for private equity and venture capital funds.</li>
                  <li>Supporting clients in capital raising, investor relations, and fund performance optimization.</li>
                  <li>Providing strategic guidance on exits, acquisitions, and other value-driving activities.</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-sm text-aires-gray mt-4">
            Our approach combines a deep understanding of financial markets with hands-on experience in executing complex transactions. By acting as a trusted partner, we enable our clients to navigate challenges, seize opportunities, and achieve sustainable success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advisory;