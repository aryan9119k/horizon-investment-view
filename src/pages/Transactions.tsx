
import { FC } from "react";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowDownRight, 
  ArrowUpRight, 
  Filter, 
  Download, 
  Search 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const Transactions: FC = () => {
  // Sample data for transactions
  const transactions = [
    { 
      id: 1, 
      date: "2025-04-15", 
      type: "buy", 
      asset: "Apple Inc. (AAPL)", 
      amount: 10, 
      price: 182.65,
      total: 1826.50,
      status: "completed"
    },
    { 
      id: 2, 
      date: "2025-04-10", 
      type: "sell", 
      asset: "Microsoft Corp. (MSFT)", 
      amount: 5, 
      price: 415.25,
      total: 2076.25,
      status: "completed"
    },
    { 
      id: 3, 
      date: "2025-04-08", 
      type: "buy", 
      asset: "Vanguard Total Bond ETF", 
      amount: 25, 
      price: 77.32,
      total: 1933.00,
      status: "completed"
    },
    { 
      id: 4, 
      date: "2025-04-05", 
      type: "buy", 
      asset: "Bitcoin", 
      amount: 0.05, 
      price: 63721.40,
      total: 3186.07,
      status: "completed"
    },
    { 
      id: 5, 
      date: "2025-04-01", 
      type: "sell", 
      asset: "Tesla Inc. (TSLA)", 
      amount: 8, 
      price: 172.98,
      total: 1383.84,
      status: "completed"
    },
    { 
      id: 6, 
      date: "2025-03-28", 
      type: "buy", 
      asset: "Amazon.com Inc. (AMZN)", 
      amount: 12, 
      price: 178.25,
      total: 2139.00,
      status: "completed"
    },
    { 
      id: 7, 
      date: "2025-03-22", 
      type: "buy", 
      asset: "NVIDIA Corp. (NVDA)", 
      amount: 3, 
      price: 942.89,
      total: 2828.67,
      status: "completed"
    },
  ];

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-6">Transactions</h1>
            
            <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
              <div className="flex-1 flex items-center relative">
                <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search transactions..." 
                  className="pl-8"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Transaction Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="buy">Buy Only</SelectItem>
                    <SelectItem value="sell">Sell Only</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select defaultValue="30">
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Time Period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">Last 7 days</SelectItem>
                    <SelectItem value="30">Last 30 days</SelectItem>
                    <SelectItem value="90">Last 90 days</SelectItem>
                    <SelectItem value="365">Last year</SelectItem>
                    <SelectItem value="all">All time</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="py-3 px-4 text-left font-medium">Date</th>
                        <th className="py-3 px-4 text-left font-medium">Type</th>
                        <th className="py-3 px-4 text-left font-medium">Asset</th>
                        <th className="py-3 px-4 text-right font-medium">Amount</th>
                        <th className="py-3 px-4 text-right font-medium">Price</th>
                        <th className="py-3 px-4 text-right font-medium">Total</th>
                        <th className="py-3 px-4 text-right font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction) => (
                        <tr key={transaction.id} className="border-b">
                          <td className="py-3 px-4">{transaction.date}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center">
                              {transaction.type === "buy" ? (
                                <ArrowDownRight className="h-4 w-4 text-finance-green mr-1" />
                              ) : (
                                <ArrowUpRight className="h-4 w-4 text-finance-red mr-1" />
                              )}
                              <span className="capitalize">{transaction.type}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">{transaction.asset}</td>
                          <td className="py-3 px-4 text-right">{transaction.amount}</td>
                          <td className="py-3 px-4 text-right">${transaction.price.toFixed(2)}</td>
                          <td className="py-3 px-4 text-right">${transaction.total.toFixed(2)}</td>
                          <td className="py-3 px-4 text-right">
                            <span className="inline-block px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 capitalize">
                              {transaction.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-muted-foreground">Showing 7 of 142 transactions</p>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" disabled>Previous</Button>
                    <Button variant="outline" size="sm">Next</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Transactions;
