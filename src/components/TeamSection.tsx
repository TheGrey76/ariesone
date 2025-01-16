import { Avatar, AvatarImage } from "@/components/ui/avatar";

const TeamSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/51149253-a392-4fb8-8ab0-e82c839c0455.png')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50" />
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-aires-navy mb-12 text-center">
          Our Team
        </h2>
        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-8 transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <Avatar className="w-48 h-48 rounded-lg">
                  <AvatarImage
                    src="/lovable-uploads/62d441d4-ddb6-4d86-ba66-8838c44afaa1.png"
                    alt="Partner photo"
                    className="object-cover"
                  />
                </Avatar>
              </div>
              <div className="flex-grow space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">
                  Partner
                </h3>
                <div className="text-aires-gray space-y-4 text-sm leading-relaxed">
                  <p>
                    In my current role as a partner, my focus has solidified around capital raising, where I play a critical part in driving the financial architecture of VC and PE deals. My efforts are concentrated on securing strategic funding that aligns with our investment philosophy and enhances the long-term value of our portfolio companies.
                  </p>
                  <p>
                    The analytical skills I've honed over the years have become essential tools in this process, enabling me to assess and mitigate financial risks effectively. My ability to identify optimal investment opportunities and structure deals that balance risk and reward is central to my contribution to our firm's success.
                  </p>
                  <p>
                    I am passionate about tackling challenges in Investor Relations and fundraising. Throughout my career, I've approached complex problems head-on, consistently delivering results that exceed expectations.
                  </p>
                  <p>
                    My journey has taken me across continents, working in international business to help companies grow in new markets and build solid relationships with investors. This experience has deepened my understanding of cultural differences and how to effectively expand operations across borders.
                  </p>
                  <p>
                    Beyond technical expertise, I believe in the power of sophisticated relationships that combine human insight with a data-driven approach. I thrive in dynamic environments, combining strategic thinking with a hands-on approach to bring ideas to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;