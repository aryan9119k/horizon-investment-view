
import { FC } from "react";
import { ArrowUpRight, ArrowDownRight, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RecentTransactionsProps {
  className?: string;
}

const RecentTransactions: FC<RecentTransactionsProps> = ({ className }) => {
  // Sample transactions data
  const transactions = [
    { 
      id: "1", 
      type: "buy", 
      asset: "Apple Inc.", 
      symbol: "AAPL", 
      amount: "$2,450.00", 
      shares: "12 shares", 
      date: "Today"
    },
    { 
      id: "2", 
      type: "sell", 
      asset: "Tesla", 
      symbol: "TSLA", 
      amount: "$1,835.50", 
      shares: "5 shares", 
      date: "Yesterday"
    },
    { 
      id: "3", 
      type: "buy", 
      asset: "Amazon", 
      symbol: "AMZN", 
      amount: "$3,260.75", 
      shares: "8 shares", 
      date: "Mar 15"
    },
    { 
      id: "4", 
      type: "buy", 
      asset: "Microsoft", 
      symbol: "MSFT", 
      amount: "$1,980.25", 
      shares: "6 shares", 
      date: "Mar 14"
    },
  ];

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">Recent Transactions</CardTitle>
        <Button variant="ghost" size="sm" className="text-muted-foreground text-sm">
          View All <ArrowRight size={14} className="ml-1" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center">
              <div className={cn(
                "h-10 w-10 rounded-full flex items-center justify-center mr-3",
                transaction.type === "buy" ? "bg-finance-soft-green text-finance-green" : "bg-red-50 text-finance-red"
              )}>
                {transaction.type === "buy" ? (
                  <ArrowDownRight size={18} />
                ) : (
                  <ArrowUpRight size={18} />
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="font-medium">{transaction.asset}</span>
                  <span className="text-xs text-muted-foreground ml-2">
                    {transaction.symbol}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">
                  {transaction.shares} • {transaction.date}
                </div>
              </div>
              
              <div className="text-right">
                <div className="font-medium">{transaction.amount}</div>
                <div className={cn(
                  "text-xs",
                  transaction.type === "buy" ? "text-finance-green" : "text-finance-red"
                )}>
                  {transaction.type === "buy" ? "Bought" : "Sold"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
