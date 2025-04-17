
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PerformanceChartProps {
  className?: string;
}

const PerformanceChart: FC<PerformanceChartProps> = ({ className }) => {
  // Sample data for the chart
  const data = [
    { name: "Jan", value: 112500 },
    { name: "Feb", value: 115000 },
    { name: "Mar", value: 116800 },
    { name: "Apr", value: 118000 },
    { name: "May", value: 121500 },
    { name: "Jun", value: 126800 },
    { name: "Jul", value: 128900 },
    { name: "Aug", value: 130200 },
    { name: "Sep", value: 133500 },
    { name: "Oct", value: 136700 },
    { name: "Nov", value: 138900 },
    { name: "Dec", value: 142500 },
  ];

  const timeRanges = ["1W", "1M", "3M", "6M", "1Y", "All"];

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background p-3 border border-border rounded-md shadow-md">
          <p className="text-sm font-medium">{label}</p>
          <p className="text-sm text-finance-purple">
            ${payload[0].value.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Portfolio Performance</CardTitle>
          <div className="flex gap-1">
            {timeRanges.map((range) => (
              <Button
                key={range}
                variant={range === "1Y" ? "default" : "outline"}
                size="sm"
                className={cn(
                  "text-xs h-7",
                  range === "1Y" ? "bg-finance-purple hover:bg-finance-deep-purple" : ""
                )}
              >
                {range}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[280px] mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12 }} 
                tickFormatter={(value) => `$${value / 1000}k`}
                domain={['dataMin - 5000', 'dataMax + 5000']}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#9b87f5" 
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, fill: "#9b87f5", stroke: "white", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
