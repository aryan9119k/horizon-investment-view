
import { FC } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MarketOverviewProps {
  className?: string;
}

const MarketOverview: FC<MarketOverviewProps> = ({ className }) => {
  // Sample market data
  const marketData = [
    { name: "S&P 500", value: "4,892.03", change: "+1.76%", isPositive: true },
    { name: "Dow Jones", value: "38,243.12", change: "+1.24%", isPositive: true },
    { name: "NASDAQ", value: "15,437.94", change: "+2.18%", isPositive: true },
    { name: "Bitcoin", value: "$52,439.78", change: "-3.42%", isPositive: false },
    { name: "Gold", value: "$2,108.75", change: "+0.47%", isPositive: true },
  ];

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Market Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {marketData.map((item) => (
            <div key={item.name} className="flex items-center justify-between pb-2 border-b border-border last:border-0 last:pb-0">
              <span className="font-medium">{item.name}</span>
              <div>
                <div className="text-right font-medium">{item.value}</div>
                <div className={cn(
                  "text-xs flex items-center justify-end",
                  item.isPositive ? "text-finance-green" : "text-finance-red"
                )}>
                  {item.isPositive ? (
                    <ArrowUp size={12} className="mr-1" />
                  ) : (
                    <ArrowDown size={12} className="mr-1" />
                  )}
                  {item.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketOverview;
