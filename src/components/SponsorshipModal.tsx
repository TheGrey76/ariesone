import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SponsorshipModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SponsorshipModal = ({ open, onOpenChange }: SponsorshipModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold text-aires-navy mb-4">
            Sponsorship
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 text-left">
          <p className="text-aires-gray">
            At the heart of our operations is a commitment to collaboration and innovation. We partner with leading financial issuers to design, structure, and launch cutting-edge investment products tailored to meet the evolving needs of investors. Our approach to sponsorship involves more than just offering expertise; it's about creating solutions that unlock new opportunities and deliver measurable value.
          </p>
          
          <p className="text-aires-gray">
            We leverage our deep industry knowledge and extensive network to navigate the complexities of product development. Whether it's crafting bespoke investment vehicles or working on large-scale initiatives, we focus on delivering offerings that are both innovative and compliant with the highest regulatory standards.
          </p>

          <div>
            <h3 className="text-lg font-semibold text-aires-navy mb-4">
              Our sponsorship framework includes:
            </h3>
            <ul className="space-y-4 list-none">
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
                <li 
                  key={index}
                  className="p-4 bg-white/80 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h4 className="font-semibold text-aires-blue mb-2">{item.title}</h4>
                  <p className="text-aires-gray text-sm">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-aires-gray mt-6">
            With a strong focus on quality, innovation, and strategic partnerships, we ensure that every product we sponsor becomes a powerful tool for achieving both institutional and individual investment goals.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SponsorshipModal;