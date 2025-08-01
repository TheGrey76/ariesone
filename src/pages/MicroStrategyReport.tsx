import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Download, TrendingUp, BarChart3, PieChart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const MicroStrategyReport = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handlePurchase = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: { 
          amount: 1000, // £10.00 in pence
          currency: 'gbp',
          product_name: 'MicroStrategy Report – AIRES Edition',
          success_url: `${window.location.origin}/thankyou.html`,
          cancel_url: window.location.href
        }
      });

      if (error) throw error;
      
      // Redirect to Stripe checkout in the same window
      window.location.href = data.url;
      
    } catch (error) {
      console.error('Error creating payment:', error);
      toast({
        title: "Error",
        description: "Failed to create payment session. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Bitcoin Treasury Analysis",
      description: "Deep dive into MicroStrategy's Bitcoin holdings and strategy"
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Financial Performance",
      description: "Comprehensive analysis of financial metrics and performance indicators"
    },
    {
      icon: <PieChart className="h-5 w-5" />,
      title: "Market Position",
      description: "Strategic positioning in the cryptocurrency and enterprise software space"
    }
  ];

  return (
    <div className="pt-32 min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              AIRES Edition
            </Badge>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-aires-blue">
              MicroStrategy Report
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive analysis of MicroStrategy's revolutionary Bitcoin treasury strategy and its impact on the enterprise software market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Details */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    What You'll Get
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Bitcoin treasury strategy analysis",
                    "Financial performance deep dive",
                    "Market positioning insights",
                    "Risk assessment and outlook",
                    "Investment recommendations"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="text-aires-blue mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{feature.title}</h4>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Purchase Card */}
            <div className="space-y-6">
              <Card className="border-aires-blue/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Get Instant Access</CardTitle>
                  <CardDescription>
                    Download immediately after purchase
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-aires-blue">£10.00</div>
                    <div className="text-sm text-muted-foreground">One-time payment</div>
                  </div>
                  
                  <Button 
                    onClick={handlePurchase}
                    disabled={isLoading}
                    size="lg"
                    className="w-full bg-gradient-to-r from-aires-blue to-aires-blue/80 hover:from-aires-blue/90 hover:to-aires-blue/70 text-white font-semibold"
                  >
                    {isLoading ? "Processing..." : "Purchase Report"}
                  </Button>
                  
                  <div className="text-xs text-muted-foreground">
                    Secure payment powered by Stripe<br/>
                    30-day money-back guarantee
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Why Choose AIRES?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>AI-powered analysis and insights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Expert research team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Data-driven recommendations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Regular updates and revisions</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroStrategyReport;