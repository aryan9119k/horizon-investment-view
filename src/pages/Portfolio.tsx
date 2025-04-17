
import { FC } from "react";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const Portfolio: FC = () => {
  // Sample data for the portfolio
  const portfolioData = [
    { name: "Stocks", value: 65000, color: "#9b87f5" },
    { name: "Bonds", value: 25000, color: "#7E69AB" },
    { name: "Cash", value: 12000, color: "#6E59A5" },
    { name: "Real Estate", value: 30000, color: "#D6BCFA" },
    { name: "Crypto", value: 10000, color: "#E5DEFF" },
  ];

  const totalValue = portfolioData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-6">Portfolio Overview</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Asset Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={portfolioData}
                          cx="50%"
                          cy="50%"
                          innerRadius={80}
                          outerRadius={120}
                          paddingAngle={2}
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {portfolioData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value: number) => [`$${value.toLocaleString()}`, 'Value']}
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Total Value</div>
                    <div className="text-2xl font-bold">${totalValue.toLocaleString()}</div>
                  </div>
                  
                  {portfolioData.map((asset, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-2" 
                          style={{ backgroundColor: asset.color }}
                        ></div>
                        <span>{asset.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">${asset.value.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">
                          {((asset.value / totalValue) * 100).toFixed(1)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Holdings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="py-3 px-4 text-left font-medium">Asset</th>
                        <th className="py-3 px-4 text-left font-medium">Type</th>
                        <th className="py-3 px-4 text-right font-medium">Shares</th>
                        <th className="py-3 px-4 text-right font-medium">Price</th>
                        <th className="py-3 px-4 text-right font-medium">Value</th>
                        <th className="py-3 px-4 text-right font-medium">% Return</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">Apple Inc. (AAPL)</td>
                        <td className="py-3 px-4">Stock</td>
                        <td className="py-3 px-4 text-right">85</td>
                        <td className="py-3 px-4 text-right">$186.30</td>
                        <td className="py-3 px-4 text-right">$15,835.50</td>
                        <td className="py-3 px-4 text-right text-finance-green">+24.5%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Microsoft Corp. (MSFT)</td>
                        <td className="py-3 px-4">Stock</td>
                        <td className="py-3 px-4 text-right">45</td>
                        <td className="py-3 px-4 text-right">$402.75</td>
                        <td className="py-3 px-4 text-right">$18,123.75</td>
                        <td className="py-3 px-4 text-right text-finance-green">+32.1%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Vanguard Total Bond ETF</td>
                        <td className="py-3 px-4">ETF</td>
                        <td className="py-3 px-4 text-right">320</td>
                        <td className="py-3 px-4 text-right">$78.28</td>
                        <td className="py-3 px-4 text-right">$25,049.60</td>
                        <td className="py-3 px-4 text-right text-finance-red">-2.8%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Bitcoin</td>
                        <td className="py-3 px-4">Crypto</td>
                        <td className="py-3 px-4 text-right">0.18</td>
                        <td className="py-3 px-4 text-right">$64,850.00</td>
                        <td className="py-3 px-4 text-right">$11,673.00</td>
                        <td className="py-3 px-4 text-right text-finance-green">+86.4%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;
