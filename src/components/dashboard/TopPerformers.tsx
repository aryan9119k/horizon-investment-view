
import { FC } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TopPerformersProps {
  className?: string;
}

const TopPerformers: FC<TopPerformersProps> = ({ className }) => {
  // Sample top performers data
  const topPerformers = [
    { 
      name: "Apple Inc", 
      symbol: "AAPL", 
      price: "$182.52", 
      change: "+3.28%", 
      isPositive: true 
    },
    { 
      name: "NVIDIA Corp", 
      symbol: "NVDA", 
      price: "$874.15", 
      change: "+5.16%", 
      isPositive: true 
    },
    { 
      name: "Meta Platforms", 
      symbol: "META", 
      price: "$485.12", 
      change: "+2.35%", 
      isPositive: true 
    },
    { 
      name: "PayPal Holdings", 
      symbol: "PYPL", 
      price: "$62.37", 
      change: "-1.47%", 
      isPositive: false 
    },
  ];

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Top Performers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topPerformers.map((stock) => (
            <div key={stock.symbol} className="flex items-center">
              <div className={cn(
                "h-10 w-10 rounded-md flex items-center justify-center mr-3 text-xs font-bold",
                "bg-finance-light-purple text-finance-purple"
              )}>
                {stock.symbol.substring(0, 2)}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="font-medium">{stock.name}</span>
                  <span className="text-xs text-muted-foreground ml-2">
                    {stock.symbol}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Stock • Technology
                </div>
              </div>
              
              <div className="text-right">
                <div className="font-medium">{stock.price}</div>
                <div className={cn(
                  "text-xs flex items-center justify-end",
                  stock.isPositive ? "text-finance-green" : "text-finance-red"
                )}>
                  {stock.isPositive ? (
                    <ArrowUpRight size={12} className="mr-1" />
                  ) : (
                    <ArrowDownRight size={12} className="mr-1" />
                  )}
                  {stock.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopPerformers;
