import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ChartBar, LineChart, ShieldCheck, Briefcase } from "lucide-react";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-aires-navy via-aires-blue to-aires-emerald">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-start mb-8">
          <Button
            variant="outline"
            className="text-white hover:bg-white/20 border-white/20"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <div className="flex flex-col items-end">
            <a href="/" className="text-3xl font-heading font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              AIRES
            </a>
            <span className="text-sm font-heading font-semibold text-white/80">
              Data Driven Decision
            </span>
          </div>
        </div>

        <Card className="w-full max-w-4xl mx-auto mt-8 bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-heading font-bold text-white">
              Investment Advisory Services
            </CardTitle>
            <CardDescription className="text-white/80">
              Tailored solutions for institutional investors and family offices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="services" className="w-full">
              <TabsList className="w-full bg-white/10 border-white/20">
                <TabsTrigger 
                  value="services"
                  className="w-1/2 text-white data-[state=active]:bg-aires-emerald/20"
                >
                  Services
                </TabsTrigger>
                <TabsTrigger 
                  value="fees"
                  className="w-1/2 text-white data-[state=active]:bg-aires-emerald/20"
                >
                  Fee Structure
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="services" className="mt-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: ChartBar,
                      title: "Portfolio Analysis",
                      description: "Comprehensive portfolio analysis and optimization strategies.",
                      features: [
                        "Risk-adjusted performance analysis",
                        "Asset allocation optimization",
                        "Portfolio rebalancing strategies",
                        "Investment efficiency assessment"
                      ]
                    },
                    {
                      icon: LineChart,
                      title: "Market Opportunities",
                      description: "Strategic market opportunity assessment and analysis.",
                      features: [
                        "Market trend analysis",
                        "Sector rotation strategies",
                        "Emerging market opportunities",
                        "Global macro analysis"
                      ]
                    },
                    {
                      icon: ShieldCheck,
                      title: "Risk Management",
                      description: "Comprehensive risk management strategies and solutions.",
                      features: [
                        "Risk exposure analysis",
                        "Hedging strategies",
                        "Downside protection",
                        "Volatility management"
                      ]
                    },
                    {
                      icon: Briefcase,
                      title: "Investment Planning",
                      description: "Strategic investment planning and execution.",
                      features: [
                        "Investment policy development",
                        "Strategic asset allocation",
                        "Performance monitoring",
                        "Investment guidelines"
                      ]
                    }
                  ].map((service, index) => (
                    <Card key={index} className="bg-white/5 border-white/10">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <service.icon className="h-6 w-6 text-white" />
                          <CardTitle className="text-lg text-white">{service.title}</CardTitle>
                        </div>
                        <CardDescription className="text-white/80">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="text-white/80 flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-aires-emerald" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="fees" className="mt-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Briefcase,
                      title: "Investment Advisory",
                      description: "Our fee structure is designed to align our interests with yours.",
                      items: [
                        "Customized fee arrangements based on mandate size and complexity",
                        "Transparent reporting and fee calculation methodology",
                        "Flexible structures to accommodate different investment strategies",
                        "Competitive rates aligned with industry standards"
                      ]
                    },
                    {
                      icon: ChartBar,
                      title: "Investment Products",
                      description: "Structured to provide value while maintaining transparency.",
                      items: [
                        "Fee structures tailored to product complexity and investment horizon",
                        "Institutional-grade fee arrangements",
                        "Performance-based components available",
                        "Alignment of interests through co-investment opportunities"
                      ]
                    }
                  ].map((fee, index) => (
                    <Card key={index} className="bg-white/5 border-white/10">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <fee.icon className="h-6 w-6 text-white" />
                          <CardTitle className="text-lg text-white">{fee.title}</CardTitle>
                        </div>
                        <CardDescription className="text-white/80">
                          {fee.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {fee.items.map((item, idx) => (
                            <li key={idx} className="text-white/80 flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-aires-emerald" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;