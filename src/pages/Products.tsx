import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { generatePDF } from "@/utils/pdfGenerator";
import { useToast } from "@/hooks/use-toast";
import { PortfolioChart } from "@/components/products/PortfolioChart";
import { PortfolioSummary } from "@/components/products/PortfolioSummary";
import { PortfolioTable } from "@/components/products/PortfolioTable";
import { PEFundsList } from "@/components/products/PEFundsList";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

const portfolioData = [
  {
    category: "CLO AAA",
    etf: "Janus Henderson AAA CLO ETF",
    ticker: "JAAA",
    weight: 20,
    annualYield: 5.5,
    monthlyYield: 0.46,
    color: "#2563EB"
  },
  {
    category: "CLO AA",
    etf: "iShares AAA CLO Active ETF",
    ticker: "CLOA",
    weight: 15,
    annualYield: 5.0,
    monthlyYield: 0.42,
    color: "#3B82F6"
  },
  {
    category: "CLO A",
    etf: "VanEck CLO ETF",
    ticker: "CLOI",
    weight: 10,
    annualYield: 6.0,
    monthlyYield: 0.50,
    color: "#60A5FA"
  },
  {
    category: "Corporate Bond High Yield",
    etf: "iShares iBoxx USD High Yield Corporate Bond ETF",
    ticker: "HYG",
    weight: 30,
    annualYield: 7.5,
    monthlyYield: 0.63,
    color: "#93C5FD"
  },
  {
    category: "Emerging Market Bond",
    etf: "iShares J.P. Morgan USD Emerging Markets Bond ETF",
    ticker: "EMB",
    weight: 25,
    annualYield: 8.0,
    monthlyYield: 0.67,
    color: "#BFDBFE"
  }
];

const peFundsData = [
  {
    region: "Europe",
    funds: [
      {
        name: "3i Group",
        ticker: "III.L",
        exchange: "London Stock Exchange (LSE)",
        focus: "Buyouts and infrastructure investments"
      },
      {
        name: "Eurazeo",
        ticker: "RF.PA",
        exchange: "Euronext Paris",
        focus: "Mid-market private equity and private debt"
      },
      {
        name: "Partners Group",
        ticker: "PGHN.SW",
        exchange: "Swiss Exchange",
        focus: "Global private equity, infrastructure, real estate"
      },
      {
        name: "Intermediate Capital Group",
        ticker: "ICP.L",
        exchange: "London Stock Exchange (LSE)",
        focus: "Private debt and equity investments"
      },
      {
        name: "NB Private Equity Partners",
        ticker: "NBPE.L",
        exchange: "London Stock Exchange (LSE)",
        focus: "Diversified global portfolio"
      },
      {
        name: "HgCapital Trust",
        ticker: "HGT.L",
        exchange: "London Stock Exchange (LSE)",
        focus: "Software and business services"
      }
    ]
  },
  {
    region: "United States",
    funds: [
      {
        name: "Blackstone",
        ticker: "BX",
        exchange: "New York Stock Exchange (NYSE)",
        focus: "Buyout, real estate, infrastructure, credit"
      },
      {
        name: "KKR & Co.",
        ticker: "KKR",
        exchange: "New York Stock Exchange (NYSE)",
        focus: "Private equity, infrastructure, credit"
      },
      {
        name: "Carlyle Group",
        ticker: "CG",
        exchange: "Nasdaq",
        focus: "Buyout, private credit, real estate"
      },
      {
        name: "Apollo Global Management",
        ticker: "APO",
        exchange: "New York Stock Exchange (NYSE)",
        focus: "Private equity, alternative credit"
      },
      {
        name: "TPG Inc.",
        ticker: "TPG",
        exchange: "Nasdaq",
        focus: "Private equity, venture capital, real estate"
      }
    ]
  },
  {
    region: "Asia-Pacific",
    funds: [
      {
        name: "Macquarie Group",
        ticker: "MQG.AX",
        exchange: "Australian Securities Exchange (ASX)",
        focus: "Private equity, infrastructure, alternative investments"
      },
      {
        name: "CITIC Capital",
        ticker: "0267.HK",
        exchange: "Hong Kong Stock Exchange",
        focus: "Private equity, venture capital, real estate"
      }
    ]
  }
];

const Products = () => {
  const { toast } = useToast();

  const { data: stockData, isLoading } = useQuery({
    queryKey: ["real-time-stocks"],
    queryFn: async () => {
      const { data: { data } } = await supabase.functions.invoke('fetch-stock-data');
      return data;
    },
    refetchInterval: 60000, // Refresh every minute
  });

  useEffect(() => {
    // Clean up any existing TradingView widgets
    const existingScript = document.getElementById('tradingview-widget-script');
    if (existingScript) {
      existingScript.remove();
    }

    const container = document.getElementById('tradingview-widget');
    if (container) {
      // Clear the container
      container.innerHTML = '';
      
      // Create a new div for the widget
      const widgetDiv = document.createElement('div');
      widgetDiv.className = 'tradingview-widget-container';
      container.appendChild(widgetDiv);

      // Create and configure the script
      const script = document.createElement('script');
      script.id = 'tradingview-widget-script';
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
      script.type = 'text/javascript';
      script.async = true;

      // Configure the widget
      const config = {
        "symbol": "AMEX:JAAA",
        "width": "100%",
        "height": "100%",
        "locale": "en",
        "dateRange": "12M",
        "colorTheme": "light",
        "trendLineColor": "#37a6ef",
        "underLineColor": "#E3F2FD",
        "isTransparent": false,
        "autosize": true,
        "largeChartUrl": ""
      };

      script.innerHTML = JSON.stringify(config);
      widgetDiv.appendChild(script);
    }

    // Cleanup function
    return () => {
      const script = document.getElementById('tradingview-widget-script');
      if (script) {
        script.remove();
      }
    };
  }, []);

  const handleDownloadPDF = () => {
    generatePDF('portfolio-content', 'AIRES-Portfolio-Holdings.pdf');
  };

  const getGoogleFinanceUrl = (ticker: string) => {
    const cleanTicker = ticker.trim();
    let formattedTicker = cleanTicker;
    let exchange = '';
    
    if (cleanTicker.includes('.L')) {
      formattedTicker = cleanTicker.replace('.L', '');
      exchange = 'LON';
    } else if (cleanTicker.includes('.PA')) {
      formattedTicker = cleanTicker.replace('.PA', '');
      exchange = 'EPA';
    } else if (cleanTicker.includes('.SW')) {
      formattedTicker = cleanTicker.replace('.SW', '');
      exchange = 'SWX';
    } else if (cleanTicker.includes('.AX')) {
      formattedTicker = cleanTicker.replace('.AX', '');
      exchange = 'ASX';
    } else if (cleanTicker.includes('.HK')) {
      formattedTicker = cleanTicker.replace('.HK', '');
      exchange = 'HKG';
    } else {
      exchange = cleanTicker === 'JAAA' ? 'AMEX' :
                cleanTicker.includes('CG') || cleanTicker.includes('TPG') ? 'NASDAQ' : 
                'NYSE';
    }
    
    return `https://www.google.com/finance/quote/${formattedTicker}:${exchange}`;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-heading font-bold text-aires-navy">
            Portfolio Holdings
          </h1>
          <Button
            onClick={handleDownloadPDF}
            className="bg-aires-navy hover:bg-aires-blue text-white transition-colors"
          >
            <FileDown className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>

        <div id="portfolio-content" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Composition</CardTitle>
              </CardHeader>
              <CardContent>
                <PortfolioChart portfolioData={portfolioData} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Live Chart (JAAA)</CardTitle>
              </CardHeader>
              <CardContent>
                <div id="tradingview-widget" className="h-[300px] w-full"></div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Portfolio Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <PortfolioSummary portfolioData={portfolioData} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Portfolio Components</CardTitle>
              {stockData && (
                <p className="text-sm text-gray-600">
                  Last updated: {new Date(stockData[0]?.timestamp).toLocaleString()}
                </p>
              )}
            </CardHeader>
            <CardContent>
              <PortfolioTable 
                portfolioData={portfolioData} 
                getGoogleFinanceUrl={getGoogleFinanceUrl}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Listed Private Equity Funds</CardTitle>
            </CardHeader>
            <CardContent>
              <PEFundsList 
                peFundsData={peFundsData}
                getGoogleFinanceUrl={getGoogleFinanceUrl}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Products;