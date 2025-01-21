import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, ExternalLink } from "lucide-react";
import { format } from "date-fns";

interface StockNewsSectionProps {
  ticker: string;
}

interface NewsItem {
  title: string;
  url: string;
  time_published: string;
  summary: string;
  sentiment_score?: number;
}

const StockNewsSection = ({ ticker }: StockNewsSectionProps) => {
  const { data: newsData, isLoading, error } = useQuery({
    queryKey: ["stockNews", ticker],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke("fetch-stock-news", {
        body: { ticker },
      });
      
      if (error) throw error;
      return data.feed || [];
    },
  });

  const getSentimentColor = (score?: number) => {
    if (!score) return "text-gray-500";
    if (score > 0.25) return "text-green-500";
    if (score < -0.25) return "text-red-500";
    return "text-yellow-500";
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Newspaper className="h-5 w-5" />
            Loading News...
          </CardTitle>
        </CardHeader>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-500">
            <Newspaper className="h-5 w-5" />
            Error Loading News
          </CardTitle>
          <CardDescription>
            Unable to fetch latest news at this time.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Newspaper className="h-5 w-5" />
          Latest News
        </CardTitle>
        <CardDescription>Recent news and market updates for {ticker}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {newsData?.slice(0, 5).map((item: NewsItem, index: number) => (
            <div
              key={index}
              className="border-l-4 border-blue-500 pl-4 hover:bg-gray-50 transition-colors"
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <h4 className="font-semibold group-hover:text-blue-600 flex items-center gap-1">
                  {item.title}
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                <p className="text-sm text-gray-600 mt-1">{item.summary}</p>
                <div className="flex items-center gap-4 mt-2 text-sm">
                  <span className="text-gray-500">
                    {format(new Date(item.time_published), "MMM d, yyyy 'at' h:mm a")}
                  </span>
                  {item.sentiment_score && (
                    <span className={getSentimentColor(item.sentiment_score)}>
                      Sentiment: {(item.sentiment_score * 100).toFixed(1)}%
                    </span>
                  )}
                </div>
              </a>
            </div>
          ))}
          {(!newsData || newsData.length === 0) && (
            <p className="text-gray-500 italic">No recent news available.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StockNewsSection;