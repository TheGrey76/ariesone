
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  ArrowRight, 
  Database, 
  Search, 
  Mail, 
  Upload, 
  Check, 
  Users, 
  Zap
} from "lucide-react";

const AiresLanding = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    linkedin: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Request submitted",
      description: "Thank you for your interest. We'll be in touch soon.",
    });
    setFormData({
      fullName: "",
      email: "",
      role: "",
      linkedin: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  
  return (
    <div className="antialiased">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-aires-navy/5 to-aires-emerald/5 -z-10" />
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 text-aires-blue">
            AI-powered Fundraising & Deal Placement
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-aires-navy">
            Reinvent capital raising with automation, investor intelligence, and global scale.
          </p>
          <Button 
            className="bg-gradient-to-r from-aires-blue to-aires-green hover:from-aires-blueDark hover:to-aires-greenLight transition-all duration-500 text-white px-8 py-6 text-lg rounded-lg shadow-lg"
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-aires-navy">
            Transforming Capital Raising
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-aires-blue/20 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-aires-blue/10 flex items-center justify-center mb-4">
                  <Database className="w-8 h-8 text-aires-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-aires-navy">Fundraising made scalable with AI</h3>
                <p className="text-aires-gray">
                  Leverage AI to streamline your fundraising process and reach more investors with less effort.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-aires-blue/20 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-aires-blue/10 flex items-center justify-center mb-4">
                  <Search className="w-8 h-8 text-aires-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-aires-navy">Instant investor profiling and deal matching</h3>
                <p className="text-aires-gray">
                  Our AI matches your deals with the most suitable investors based on deep profiling and historical data.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-aires-blue/20 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-aires-blue/10 flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-aires-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-aires-navy">Automated teaser, deck & investor communication</h3>
                <p className="text-aires-gray">
                  Generate professional teasers, enhance your deck, and automate investor communications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-aires-navy">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md flex flex-col items-center text-center relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-aires-navy flex items-center justify-center text-white font-bold text-xl">1</div>
              <div className="w-16 h-16 rounded-full bg-aires-navy/10 flex items-center justify-center mb-4">
                <Upload className="w-8 h-8 text-aires-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-aires-navy">Upload your deal</h3>
              <p className="text-aires-gray">
                Securely upload your deal details, target criteria, and fundraising objectives.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md flex flex-col items-center text-center relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-aires-navy flex items-center justify-center text-white font-bold text-xl">2</div>
              <div className="w-16 h-16 rounded-full bg-aires-navy/10 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-aires-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-aires-navy">Get matched with investors</h3>
              <p className="text-aires-gray">
                Our AI algorithm matches your deal with the most relevant investors from our global network.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md flex flex-col items-center text-center relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-aires-navy flex items-center justify-center text-white font-bold text-xl">3</div>
              <div className="w-16 h-16 rounded-full bg-aires-navy/10 flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-aires-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-aires-navy">Close faster with smart tools</h3>
              <p className="text-aires-gray">
                Utilize our AI-powered tools to streamline negotiations and close deals more efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-aires-navy">
            Who It's For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-aires-emerald/10 flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-aires-emerald" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-aires-navy">GPs & Fund Managers</h3>
                <p className="text-aires-gray text-sm">
                  Enhance your fundraising strategy and connect with qualified LPs globally.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-aires-emerald/10 flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-aires-emerald" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-aires-navy">M&A and Fundraising Advisors</h3>
                <p className="text-aires-gray text-sm">
                  Scale your advisory business and deliver faster results to your clients.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-aires-emerald/10 flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-aires-emerald" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-aires-navy">Emerging Managers</h3>
                <p className="text-aires-gray text-sm">
                  Build credibility and efficiently raise your first or subsequent fund.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-aires-emerald/10 flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-aires-emerald" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-aires-navy">Startup Founders</h3>
                <p className="text-aires-gray text-sm">
                  Focus on building your product while we help you secure the right funding partners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-aires-navy">
            Ready to Transform Your Fundraising?
          </h2>
          <p className="text-aires-gray mb-8">
            Let's discuss how AI can accelerate your capital raising strategy.
          </p>
          <div className="flex justify-center">
            <Button 
              className="bg-gradient-to-r from-aires-blue to-aires-green hover:from-aires-blueDark hover:to-aires-greenLight transition-all duration-500 text-white px-10 py-4 text-lg rounded-lg shadow-lg"
              onClick={() => window.open("https://www.linkedin.com/in/edoardogrigione/", "_blank")}
            >
              Book a Call
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 text-aires-navy">
            About Aires Data
          </h2>
          <div className="bg-gradient-to-br from-aires-navy/5 to-aires-emerald/5 p-8 rounded-lg">
            <p className="text-lg text-aires-gray text-center">
              Aires Data is created by Edoardo Grigione, an international fundraising advisor and founder of Aries76 Ltd, 
              to make capital raising more efficient, scalable, and data-driven.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiresLanding;
