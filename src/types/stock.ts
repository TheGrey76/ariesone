export interface StockData {
  ticker: string;
  name: string;
  sector: string;
  marketCap: number;
  price: number;
  peRatio: number;
  dividendYield: number;
  beta: number;
  volume: number;
}

export type SortDirection = 'asc' | 'desc';
export type SortField = keyof StockData;