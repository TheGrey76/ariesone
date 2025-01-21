export interface PortfolioItem {
  category: string;
  etf: string;
  ticker: string;
  weight: number;
  annualYield: number;
  monthlyYield: number;
  color: string;
}

export interface PEFund {
  name: string;
  ticker: string;
  exchange: string;
  focus: string;
}

export interface PERegion {
  region: string;
  funds: PEFund[];
}