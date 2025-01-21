export interface StockData {
  id: string;
  ticker: string;
  name: string;
  sector: string;
  marketCap: number;
  price: number;
  peRatio: number;
  dividendYield: number;
  beta: number;
  volume: number;
  created_at: string;
  updated_at: string;
}

export type SortDirection = 'asc' | 'desc';
export type SortField = keyof StockData;