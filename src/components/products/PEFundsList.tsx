import { PEFund, PERegion } from "@/types/portfolio";

interface PEFundsListProps {
  peFundsData: PERegion[];
  getGoogleFinanceUrl: (ticker: string) => string;
}

export const PEFundsList = ({ peFundsData, getGoogleFinanceUrl }: PEFundsListProps) => {
  return (
    <div className="space-y-8">
      {peFundsData.map((region) => (
        <div key={region.region} className="space-y-4">
          <h3 className="text-xl font-semibold text-aires-navy">{region.region}</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {region.funds.map((fund) => (
              <div
                key={fund.ticker}
                className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-aires-navy">{fund.name}</h4>
                    <a 
                      href={getGoogleFinanceUrl(fund.ticker)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono text-aires-blue hover:underline"
                    >
                      {fund.ticker}
                    </a>
                  </div>
                  <p className="text-sm text-gray-600">{fund.exchange}</p>
                  <p className="text-sm text-gray-700">{fund.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};