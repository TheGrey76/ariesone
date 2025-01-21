import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PortfolioItem } from "@/types/portfolio";

interface PortfolioTableProps {
  portfolioData: PortfolioItem[];
  getGoogleFinanceUrl: (ticker: string) => string;
}

export const PortfolioTable = ({ portfolioData, getGoogleFinanceUrl }: PortfolioTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Category</TableHead>
          <TableHead>Selected ETF</TableHead>
          <TableHead>Ticker</TableHead>
          <TableHead className="text-right">Weight (%)</TableHead>
          <TableHead className="text-right">Annual Yield (%)</TableHead>
          <TableHead className="text-right">Monthly Yield (%)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {portfolioData.map((item) => (
          <TableRow key={item.ticker}>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.etf}</TableCell>
            <TableCell>
              <a 
                href={getGoogleFinanceUrl(item.ticker)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-aires-blue hover:underline"
              >
                {item.ticker}
              </a>
            </TableCell>
            <TableCell className="text-right">{item.weight}</TableCell>
            <TableCell className="text-right">{item.annualYield}</TableCell>
            <TableCell className="text-right">
              {item.monthlyYield}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};