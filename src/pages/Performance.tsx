
import { FC } from "react";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  CartesianGrid,
  Legend
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Performance: FC = () => {
  // Sample data for the performance charts
  const performanceData = [
    { name: "Jan", value: 112500, benchmark: 110000 },
    { name: "Feb", value: 115000, benchmark: 112000 },
    { name: "Mar", value: 116800, benchmark: 114500 },
    { name: "Apr", value: 118000, benchmark: 116000 },
    { name: "May", value: 121500, benchmark: 118500 },
    { name: "Jun", value: 126800, benchmark: 122000 },
    { name: "Jul", value: 128900, benchmark: 123500 },
    { name: "Aug", value: 130200, benchmark: 125000 },
    { name: "Sep", value: 133500, benchmark: 127500 },
    { name: "Oct", value: 136700, benchmark: 129000 },
    { name: "Nov", value: 138900, benchmark: 131000 },
    { name: "Dec", value: 142500, benchmark: 133000 },
  ];
  
  const monthlyReturns = [
    { name: "Jan", return: 1.8 },
    { name: "Feb", return: 2.2 },
    { name: "Mar", return: 1.6 },
    { name: "Apr", return: 1.0 },
    { name: "May", return: 3.0 },
    { name: "Jun", return: 4.4 },
    { name: "Jul", return: 1.7 },
    { name: "Aug", return: 1.0 },
    { name: "Sep", return: 2.5 },
    { name: "Oct", return: 2.4 },
    { name: "Nov", return: 1.6 },
    { name: "Dec", return: 2.6 },
  ];

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background p-3 border border-border rounded-md shadow-md">
          <p className="text-sm font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.name === "return" 
                ? `${entry.value.toFixed(1)}%` 
                : `$${entry.value.toLocaleString()}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-6">Performance Analysis</h1>
            
            <Tabs defaultValue="overview" className="mb-6">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="monthly">Monthly Returns</TabsTrigger>
                <TabsTrigger value="comparison">Benchmark Comparison</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Portfolio Value Over Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={performanceData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                          <XAxis 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false}
                          />
                          <YAxis 
                            axisLine={false} 
                            tickLine={false}
                            tickFormatter={(value) => `$${value / 1000}k`}
                          />
                          <Tooltip content={<CustomTooltip />} />
                          <Area 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#9b87f5" 
                            fill="#9b87f5" 
                            fillOpacity={0.2}
                            strokeWidth={3}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="monthly" className="mt-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Monthly Returns (%)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={monthlyReturns}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                          <XAxis 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false}
                          />
                          <YAxis 
                            axisLine={false} 
                            tickLine={false}
                            tickFormatter={(value) => `${value}%`}
                          />
                          <Tooltip content={<CustomTooltip />} />
                          <Bar 
                            dataKey="return" 
                            fill="#9b87f5" 
                            radius={[4, 4, 0, 0]}
                            name="return"
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="comparison" className="mt-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Benchmark Comparison</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={performanceData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                          <XAxis 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false}
                          />
                          <YAxis 
                            axisLine={false} 
                            tickLine={false}
                            tickFormatter={(value) => `$${value / 1000}k`}
                          />
                          <Tooltip content={<CustomTooltip />} />
                          <Legend />
                          <Line 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#9b87f5" 
                            strokeWidth={3}
                            dot={false}
                            name="Portfolio"
                          />
                          <Line 
                            type="monotone" 
                            dataKey="benchmark" 
                            stroke="#6E59A5" 
                            strokeWidth={3}
                            strokeDasharray="5 5"
                            dot={false}
                            name="Benchmark"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Total Return</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-finance-green">+26.7%</div>
                  <p className="text-sm text-muted-foreground">Since inception</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Annual Return</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-finance-green">+12.4%</div>
                  <p className="text-sm text-muted-foreground">Year to date</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Benchmark Difference</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-finance-green">+3.2%</div>
                  <p className="text-sm text-muted-foreground">Outperforming S&P 500</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Performance;
