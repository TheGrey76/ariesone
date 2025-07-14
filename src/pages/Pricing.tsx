import { ChevronDown, ChevronRight, Download, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            <span className="bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transparent, flexible models designed for private equity professionals.
          </p>
        </div>

        {/* Access Plan */}
        <div className="mb-16">
          <Card className="border-muted bg-muted/20 hover:bg-muted/30 transition-colors duration-300">
            <CardHeader className="pb-8">
              <CardTitle className="text-3xl font-heading font-bold mb-4">
                <span className="bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent">
                  Smart Deal Flow – Access Plan
                </span>
              </CardTitle>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For private equity funds looking to enhance deal sourcing and investor engagement with minimal fixed costs.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Includes:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aires-emerald rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Access to AiresData's AI-powered matching engine
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aires-emerald rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Investor profiling and automated deal matching
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aires-emerald rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Custom dashboard to monitor activity
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aires-emerald rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Smart teaser & deck generation using proprietary templates
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aires-emerald rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Analyst supervision for target validation
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
                      <span className="font-semibold">Success fee:</span> 2% on closed transactions sourced via AiresData
                    </p>
                  </div>
                  <Button className="bg-gradient-to-r from-aires-navy to-aires-blue hover:from-aires-blue hover:to-aires-emerald text-white px-8 py-3">
                    Get Started
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tailored Mandate */}
        <div className="mb-16">
          <Card className="border-muted bg-muted/20 hover:bg-muted/30 transition-colors duration-300">
            <CardHeader className="pb-8">
              <CardTitle className="text-3xl font-heading font-bold mb-4">
                <span className="bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent">
                  Bespoke Capital Partner – Tailored Engagement
                </span>
              </CardTitle>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For fund managers and promoters seeking a high-touch, custom fundraising strategy for a specific fund or deal.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Includes:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aires-emerald rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Strategic advisory on fundraising narrative and positioning
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aires-emerald rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Full investor outreach and communications management
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aires-emerald rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Design and delivery of bespoke marketing materials
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aires-emerald rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Ongoing structuring support and investor coordination
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-aires-emerald rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Dedicated analyst and relationship manager
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-muted pt-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <p className="text-lg">
                      <span className="font-semibold">Retainer:</span> custom (starting at €5,000/month)
                    </p>
                    <p className="text-lg">
                      <span className="font-semibold">Success fee:</span> 2% on committed capital
                    </p>
                  </div>
                  <Button className="bg-gradient-to-r from-aires-navy to-aires-blue hover:from-aires-blue hover:to-aires-emerald text-white px-8 py-3">
                    Request Proposal
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add-ons */}
        <div className="mb-16">
          <Card className="border-muted bg-muted/10">
            <CardHeader>
              <CardTitle className="text-2xl font-heading font-bold">
                <span className="bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent">
                  Optional Add-ons (available upon request)
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-aires-blue rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  Advanced investor intelligence & analytics
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-aires-blue rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  CRM and data integration
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-aires-blue rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  ESG/Impact investment reporting
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-aires-blue rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  White-label solutions for family offices and advisors
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-muted">
              <AccordionTrigger className="text-left text-lg font-medium hover:text-aires-blue">
                What's the difference between the Access Plan and Tailored Mandate?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                The Access Plan offers always-on AI-powered dealflow tools at minimal fixed cost, while the Tailored Mandate is a hands-on advisory service built around a specific fundraising objective.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-muted">
              <AccordionTrigger className="text-left text-lg font-medium hover:text-aires-blue">
                Is AiresData a regulated entity?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                AiresData acts as an independent advisor and platform provider. Regulated activity, if required, is executed through licensed partners.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-muted">
              <AccordionTrigger className="text-left text-lg font-medium hover:text-aires-blue">
                What does the success fee include?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                The full process from investor identification, contact, and support through deal closing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-heading font-bold mb-8">
            <span className="bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald bg-clip-text text-transparent">
              Let's Build Your Fundraising Edge
            </span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-aires-navy to-aires-blue hover:from-aires-blue hover:to-aires-emerald text-white px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Book an Intro Call
            </Button>
            <Button variant="outline" className="border-aires-blue text-aires-blue hover:bg-aires-blue hover:text-white px-8 py-4 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Download Sample Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;