export interface StockData {
  id: string;
  ticker: string;
  name: string;
  sector: string;
  market_cap: number;
  price: number;
  pe_ratio: number;
  dividend_yield: number;
  beta: number;
  volume: number;
  created_at: string;
  updated_at: string;
}

export type SortDirection = 'asc' | 'desc';
export type SortField = keyof StockData;