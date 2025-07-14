import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  console.log("Pricing component is rendering");
  
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        
        {/* Section 1 - Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            <span className="bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Straightforward. Efficient. AI-supported. Designed for fund managers.
          </p>
        </div>

        {/* Section 2 - Standard Plan */}
        <div className="mb-16">
          <Card className="border-muted bg-muted/20 hover:bg-muted/30 transition-colors duration-300">
            <CardHeader className="pb-8">
              <CardTitle className="text-3xl font-heading font-bold mb-4">
                <span className="bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent">
                  AI-Powered Fundraising Support
                </span>
              </CardTitle>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For private equity funds and deal sponsors looking for a lean and cost-effective way to accelerate fundraising and investor engagement.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Includes:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aires-emerald rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Investor profiling and intelligent matching via proprietary tools
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aires-emerald rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Deal presentation materials (teaser & slides) created with AI-assisted workflows
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aires-emerald rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Structured outreach with LPs and qualified investors
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aires-emerald rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Custom reporting on fundraising progress
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aires-emerald rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Human-led execution backed by smart automation
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-muted pt-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <p className="text-lg">
                      <span className="font-semibold">Monthly retainer:</span> €1,000
                    </p>
                    <p className="text-lg">
                      <span className="font-semibold">Success fee:</span> 2% on capital raised through AiresData
                    </p>
                  </div>
                  <Button className="bg-gradient-to-r from-aires-navy to-aires-blue hover:from-aires-blue hover:to-aires-emerald text-white px-8 py-3">
                    Start With Us
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section 3 - Tailored Mandate */}
        <div className="mb-16">
          <Card className="border-muted bg-muted/20 hover:bg-muted/30 transition-colors duration-300">
            <CardHeader className="pb-8">
              <CardTitle className="text-3xl font-heading font-bold mb-4">
                <span className="bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent">
                  Bespoke Capital Raising Advisory
                </span>
              </CardTitle>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For funds and promoters seeking a full-service, strategic fundraising mandate.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Includes:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aires-emerald rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Strategic narrative development and positioning
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aires-emerald rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Investor targeting and personalized outreach
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aires-emerald rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Bespoke teaser, deck, and data-driven investor materials
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aires-emerald rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    End-to-end deal support
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aires-emerald rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Direct relationship management with investors
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-muted pt-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <p className="text-lg">
                      <span className="font-semibold">Retainer:</span> from €5,000/month
                    </p>
                    <p className="text-lg">
                      <span className="font-semibold">Success fee:</span> 2% on committed capital
                    </p>
                  </div>
                  <Button className="bg-gradient-to-r from-aires-navy to-aires-blue hover:from-aires-blue hover:to-aires-emerald text-white px-8 py-3">
                    Request a Custom Proposal
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section 4 - How We Work */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              <span className="bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent">
                How We Work
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-aires-navy to-aires-blue text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">You send us the deal</h3>
              <p className="text-muted-foreground">
                Share your investment opportunity and fundraising objectives with our team.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-aires-blue to-aires-emerald text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">We process, profile, and enhance with AI</h3>
              <p className="text-muted-foreground">
                Our AI tools analyze, optimize, and create compelling investor materials.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-aires-emerald to-aires-navy text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">We reach the right investors and track results</h3>
              <p className="text-muted-foreground">
                Targeted outreach and comprehensive progress tracking for maximum impact.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground italic">
              No logins. No complexity. Just results.
            </p>
          </div>
        </div>

        {/* Section 5 - Final CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-heading font-bold mb-8">
            <span className="bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald bg-clip-text text-transparent">
              Let's bring AI into your fundraising strategy.
            </span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-aires-navy to-aires-blue hover:from-aires-blue hover:to-aires-emerald text-white px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Book an Intro Call
            </Button>
            <Button variant="outline" className="border-aires-blue text-aires-blue hover:bg-aires-blue hover:text-white px-8 py-4 text-lg">
              <Mail className="mr-2 h-5 w-5" />
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;