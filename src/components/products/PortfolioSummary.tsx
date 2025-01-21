import { PortfolioItem } from "@/types/portfolio";

interface PortfolioSummaryProps {
  portfolioData: PortfolioItem[];
}

export const PortfolioSummary = ({ portfolioData }: PortfolioSummaryProps) => {
  const totalAnnualYield = portfolioData.reduce(
    (acc, item) => acc + (item.weight / 100) * item.annualYield,
    0
  ).toFixed(2);

  const totalMonthlyYield = portfolioData.reduce(
    (acc, item) => acc + (item.weight / 100) * item.monthlyYield,
    0
  ).toFixed(2);

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-aires-gray">Total Annual Yield</p>
        <p className="text-3xl font-bold text-aires-navy">
          {totalAnnualYield}%
        </p>
      </div>
      <div>
        <p className="text-sm text-aires-gray">Total Monthly Yield</p>
        <p className="text-3xl font-bold text-aires-navy">
          {totalMonthlyYield}%
        </p>
      </div>
    </div>
  );
};