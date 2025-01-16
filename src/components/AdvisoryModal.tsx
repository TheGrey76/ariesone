import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AdvisoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AdvisoryModal = ({ open, onOpenChange }: AdvisoryModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold text-aires-navy mb-4">
            Advisory
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 text-left">
          <p className="text-aires-gray">
            Our advisory services are designed to empower clients with strategic insights and actionable solutions that drive growth and maximize value. We specialize in providing comprehensive guidance on portfolio optimization and identifying market opportunities, with a particular focus on private equity and venture capital funds.
          </p>
          
          <p className="text-aires-gray">
            We understand that navigating the complexities of today's investment landscape requires a combination of expertise, foresight, and adaptability. Our team works closely with clients to develop tailored strategies that align with their unique objectives and deliver measurable results.
          </p>

          <div>
            <h3 className="text-lg font-semibold text-aires-navy mb-4">
              Our advisory services include:
            </h3>
            
            <div className="space-y-6">
              <div className="p-4 bg-white/80 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="font-semibold text-aires-blue mb-2">Portfolio Optimization</h4>
                <ul className="list-disc pl-5 space-y-2 text-aires-gray text-sm">
                  <li>Analyzing current investments to identify underperforming assets and opportunities for value creation.</li>
                  <li>Structuring diversified portfolios to enhance returns while managing risk effectively.</li>
                  <li>Implementing strategies to align portfolio performance with long-term goals.</li>
                </ul>
              </div>

              <div className="p-4 bg-white/80 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="font-semibold text-aires-blue mb-2">Market Opportunity Analysis</h4>
                <ul className="list-disc pl-5 space-y-2 text-aires-gray text-sm">
                  <li>Identifying emerging trends, sectors, and geographies with high growth potential.</li>
                  <li>Providing in-depth market research and data-driven recommendations to capitalize on these opportunities.</li>
                  <li>Assisting clients in entering new markets or sectors with confidence and precision.</li>
                </ul>
              </div>

              <div className="p-4 bg-white/80 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="font-semibold text-aires-blue mb-2">Private Equity and Venture Capital Focus</h4>
                <ul className="list-disc pl-5 space-y-2 text-aires-gray text-sm">
                  <li>Offering end-to-end advisory services for private equity and venture capital funds, from fund structuring to deal sourcing and execution.</li>
                  <li>Supporting clients in capital raising, investor relations, and fund performance optimization.</li>
                  <li>Providing strategic guidance on exits, acquisitions, and other value-driving activities.</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-aires-gray mt-6">
            Our approach combines a deep understanding of financial markets with hands-on experience in executing complex transactions. By acting as a trusted partner, we enable our clients to navigate challenges, seize opportunities, and achieve sustainable success.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdvisoryModal;