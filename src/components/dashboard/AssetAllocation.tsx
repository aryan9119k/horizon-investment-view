
import { FC } from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AssetAllocationProps {
  className?: string;
}

const AssetAllocation: FC<AssetAllocationProps> = ({ className }) => {
  // Sample data
  const assets = [
    { name: "Stocks", percentage: 45, color: "bg-finance-purple" },
    { name: "Bonds", percentage: 25, color: "bg-finance-deep-purple" },
    { name: "Real Estate", percentage: 15, color: "bg-finance-blue" },
    { name: "Crypto", percentage: 10, color: "bg-finance-bright-blue" },
    { name: "Cash", percentage: 5, color: "bg-gray-300" },
  ];

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">Asset Allocation</CardTitle>
        <Button variant="ghost" size="sm" className="text-muted-foreground text-sm">
          View Details <ArrowRight size={14} className="ml-1" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          {assets.map((asset) => (
            <div 
              key={asset.name} 
              className={cn("h-2 rounded-full", asset.color)}
              style={{ width: `${asset.percentage}%` }}
            />
          ))}
        </div>
        
        <div className="space-y-3">
          {assets.map((asset) => (
            <div key={asset.name} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={cn("h-3 w-3 rounded-sm mr-2", asset.color)} />
                <span className="text-sm">{asset.name}</span>
              </div>
              <span className="text-sm font-medium">{asset.percentage}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AssetAllocation;
