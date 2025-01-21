import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";
import { PortfolioItem } from "@/types/portfolio";

interface PortfolioChartProps {
  portfolioData: PortfolioItem[];
}

export const PortfolioChart = ({ portfolioData }: PortfolioChartProps) => {
  return (
    <div className="h-[300px]">
      <ChartContainer config={{}}>
        <PieChart>
          <Pie
            data={portfolioData}
            dataKey="weight"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={({ name, percent }) => 
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {portfolioData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
        </PieChart>
      </ChartContainer>
    </div>
  );
};