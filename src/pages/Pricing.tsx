import { Check, Star, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const plans = [
    {
      name: "AIRES Essential",
      price: "€299",
      period: "per month", 
      description: "Perfect for individual investors",
      features: [
        "Real-time market data",
        "Basic portfolio analysis",
        "Monthly market reports",
        "Email support",
        "Access to basic AI insights"
      ],
      icon: TrendingUp,
      buttonText: "Start Essential"
    },
    {
      name: "AIRES Professional", 
      price: "€699",
      period: "per month",
      description: "Advanced tools for serious investors",
      popular: true,
      features: [
        "Everything in Essential",
        "Advanced AI-driven analysis",
        "Custom portfolio optimization",
        "Weekly strategy sessions",
        "Priority support",
        "Exclusive market forecasts",
        "Risk management tools"
      ],
      icon: Star,
      buttonText: "Go Professional"
    },
    {
      name: "AIRES Enterprise",
      price: "Contact Us",
      period: "custom pricing",
      description: "Tailored solutions for institutions", 
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "White-label solutions",
        "24/7 phone support",
        "On-site training",
        "Compliance reporting"
      ],
      icon: Shield,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            Choose Your Plan
          </Badge>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            <span className="bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald bg-clip-text text-transparent">
              Investment Solutions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Unlock the power of data-driven investment decisions with our comprehensive suite of financial analytics tools.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={index} 
                className={`relative ${
                  plan.popular 
                    ? 'border-aires-blue shadow-2xl scale-105 bg-gradient-to-b from-white to-aires-blue/5' 
                    : 'border-border hover:border-aires-blue/30'
                } hover:shadow-xl transition-all duration-500 group`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-aires-blue to-aires-emerald text-white px-6 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8 pt-8">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-r from-aires-navy/10 to-aires-emerald/10">
                    <IconComponent className="h-8 w-8 text-aires-blue" />
                  </div>
                  <CardTitle className="text-2xl font-heading font-bold mb-2">
                    <span className="bg-gradient-to-r from-aires-navy to-aires-blue bg-clip-text text-transparent">
                      {plan.name}
                    </span>
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground mb-6">
                    {plan.description}
                  </CardDescription>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.price !== "Contact Us" && (
                      <span className="text-lg text-muted-foreground ml-2">{plan.period}</span>
                    )}
                  </div>
                  {plan.price === "Contact Us" && (
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  )}
                </CardHeader>

                <CardContent className="space-y-4 px-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-aires-emerald mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </CardContent>

                <CardFooter className="pt-8 px-8 pb-8">
                  <Button 
                    className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-aires-blue to-aires-emerald hover:from-aires-navy hover:to-aires-blue text-white shadow-lg' 
                        : 'bg-gradient-to-r from-aires-navy to-aires-blue hover:from-aires-blue hover:to-aires-emerald text-white'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-aires-navy/5 to-aires-emerald/5 rounded-2xl p-8 border border-aires-blue/20">
            <h3 className="text-2xl font-heading font-bold mb-4">
              <span className="bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">
                All Plans Include
              </span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div className="flex flex-col items-center">
                <Shield className="h-6 w-6 text-aires-blue mb-2" />
                <span>Bank-level security</span>
              </div>
              <div className="flex flex-col items-center">
                <TrendingUp className="h-6 w-6 text-aires-emerald mb-2" />
                <span>Real-time data</span>
              </div>
              <div className="flex flex-col items-center">
                <Star className="h-6 w-6 text-aires-navy mb-2" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mt-8 leading-relaxed">
            All subscriptions are billed monthly and can be cancelled at any time. 
            Enterprise solutions include custom terms and dedicated support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;