
import { FC } from "react";
import { ArrowUp, ArrowDown, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PortfolioSummaryProps {
  className?: string;
}

const PortfolioSummary: FC<PortfolioSummaryProps> = ({ className }) => {
  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Portfolio Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Total Portfolio Value</div>
            <div className="text-3xl font-bold flex items-center">
              <DollarSign className="h-5 w-5 text-muted-foreground mr-1" />
              142,568.25
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Today's Change</div>
              <div className="flex items-center">
                <span className="text-lg font-semibold mr-2">+$1,245.32</span>
                <span className="text-finance-green flex items-center text-sm">
                  <ArrowUp size={14} className="mr-1" />
                  0.87%
                </span>
              </div>
            </div>
            
            <div>
              <div className="text-sm text-muted-foreground mb-1">Overall Return</div>
              <div className="flex items-center">
                <span className="text-lg font-semibold mr-2">+$32,465.80</span>
                <span className="text-finance-green flex items-center text-sm">
                  <ArrowUp size={14} className="mr-1" />
                  29.48%
                </span>
              </div>
            </div>
          </div>
          
          <div className="pt-2 border-t border-border">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Monthly Performance</span>
              <span className="text-finance-red flex items-center text-sm">
                <ArrowDown size={14} className="mr-1" />
                2.3%
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-finance-purple w-3/4 rounded-full"></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioSummary;
