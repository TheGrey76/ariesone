import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, ExternalLink, AlertTriangle } from "lucide-react";
import { format, parseISO } from "date-fns";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

interface StockNewsSectionProps {
  ticker: string;
}

interface NewsItem {
  title: string;
  url: string;
  time_published: string;
  summary: string;
  authors?: string[];
  source?: string;
  sentiment_score?: number;
  relevance_score?: number;
}

const StockNewsSection = ({ ticker }: StockNewsSectionProps) => {
  const { data: newsData, isLoading, error } = useQuery({
    queryKey: ["stockNews", ticker],
    queryFn: async () => {
      console.log("Fetching news for ticker:", ticker);
      const { data, error } = await supabase.functions.invoke("fetch-stock-news", {
        body: { ticker },
      });
      
      if (error) {
        console.error("Error fetching news:", error);
        throw error;
      }

      console.log("News data received:", data);
      
      // Check for API limit message
      if (data.Information?.includes("API rate limit")) {
        throw new Error("API_LIMIT_REACHED");
      }
      
      return data.feed || [];
    },
  });

  const getSentimentColor = (score?: number) => {
    if (!score) return "text-gray-500";
    if (score > 0.25) return "text-green-500";
    if (score < -0.25) return "text-red-500";
    return "text-yellow-500";
  };

  const formatPublishedDate = (dateString: string) => {
    try {
      const date = parseISO(dateString);
      return format(date, "MMM d, yyyy 'at' h:mm a");
    } catch (error) {
      console.error("Error formatting date:", dateString, error);
      return "Date unavailable";
    }
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
            <AlertTriangle className="h-5 w-5" />
            Unable to Load News
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {error.message === "API_LIMIT_REACHED" ? (
                <>
                  The news API has reached its daily request limit. 
                  Please try again tomorrow or contact support for more information.
                </>
              ) : (
                "Unable to fetch latest news at this time. Please try again later."
              )}
            </AlertDescription>
          </Alert>
        </CardContent>
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
          {newsData && newsData.length > 0 ? (
            newsData.map((item: NewsItem, index: number) => (
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
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-sm">
                    <span className="text-gray-500">
                      {formatPublishedDate(item.time_published)}
                    </span>
                    {item.source && (
                      <span className="text-gray-600">
                        Source: {item.source}
                      </span>
                    )}
                    {item.authors && item.authors.length > 0 && (
                      <span className="text-gray-600">
                        By: {item.authors.join(", ")}
                      </span>
                    )}
                    {item.sentiment_score !== undefined && (
                      <span className={getSentimentColor(item.sentiment_score)}>
                        Sentiment: {(item.sentiment_score * 100).toFixed(1)}%
                      </span>
                    )}
                    {item.relevance_score !== undefined && (
                      <span className="text-gray-600">
                        Relevance: {(item.relevance_score * 100).toFixed(1)}%
                      </span>
                    )}
                  </div>
                </a>
              </div>
            ))
          ) : (
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>No News Available</AlertTitle>
              <AlertDescription>
                No recent news articles found for {ticker}. This could be due to:
                <ul className="list-disc pl-5 mt-2">
                  <li>Limited market activity for this stock</li>
                  <li>API service limitations</li>
                  <li>Temporary service interruption</li>
                </ul>
                Please check back later for updates.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StockNewsSection;