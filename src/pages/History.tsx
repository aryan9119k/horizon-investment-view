
import { FC } from "react";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Filter, Calendar, Download, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const History: FC = () => {
  // Sample data for account history
  const accountHistory = [
    {
      id: 1,
      date: "2025-04-15 09:32:18",
      activity: "Purchased 10 shares of Apple Inc. (AAPL)",
      category: "Trade",
      details: "Limit order executed at $182.65 per share"
    },
    {
      id: 2,
      date: "2025-04-10 14:15:47",
      activity: "Sold 5 shares of Microsoft Corp. (MSFT)",
      category: "Trade",
      details: "Market order executed at $415.25 per share"
    },
    {
      id: 3,
      date: "2025-04-08 10:05:33",
      activity: "Dividend received from Coca-Cola Co. (KO)",
      category: "Income",
      details: "Quarterly dividend of $0.46 per share for 120 shares"
    },
    {
      id: 4,
      date: "2025-04-05 16:22:40",
      activity: "Deposited funds",
      category: "Deposit",
      details: "$5,000.00 deposited via ACH transfer"
    },
    {
      id: 5,
      date: "2025-03-28 11:13:52",
      activity: "Updated investment strategy",
      category: "Account",
      details: "Modified risk tolerance from moderate to moderately aggressive"
    },
    {
      id: 6,
      date: "2025-03-25 09:45:19",
      activity: "Enabled two-factor authentication",
      category: "Security",
      details: "Added SMS verification for account login"
    },
    {
      id: 7,
      date: "2025-03-22 13:30:08",
      activity: "Portfolio rebalanced",
      category: "Account",
      details: "Automatic quarterly rebalancing to maintain target allocation"
    },
    {
      id: 8,
      date: "2025-03-18 15:42:23",
      activity: "Withdrew funds",
      category: "Withdrawal",
      details: "$2,500.00 withdrawn via wire transfer"
    },
  ];

  const loginHistory = [
    {
      id: 1,
      date: "2025-04-17 08:42:15",
      device: "MacBook Pro (Chrome)",
      location: "New York, United States",
      ipAddress: "192.168.1.XX",
      status: "Success"
    },
    {
      id: 2,
      date: "2025-04-15 17:36:28",
      device: "iPhone 15 Pro (Safari)",
      location: "New York, United States",
      ipAddress: "192.168.1.XX",
      status: "Success"
    },
    {
      id: 3,
      date: "2025-04-12 09:18:34",
      device: "MacBook Pro (Chrome)",
      location: "Chicago, United States",
      ipAddress: "172.16.254.XX",
      status: "Success"
    },
    {
      id: 4,
      date: "2025-04-08 14:52:07",
      device: "Windows PC (Firefox)",
      location: "San Francisco, United States",
      ipAddress: "10.0.0.XX",
      status: "Failed"
    },
    {
      id: 5,
      date: "2025-04-08 14:53:22",
      device: "Windows PC (Firefox)",
      location: "San Francisco, United States",
      ipAddress: "10.0.0.XX",
      status: "Success"
    },
  ];

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-6">Account History</h1>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center relative max-w-sm w-full">
                <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search history..." 
                  className="pl-8"
                />
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Date Range
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="account" className="mb-6">
              <TabsList>
                <TabsTrigger value="account">Account Activity</TabsTrigger>
                <TabsTrigger value="login">Login History</TabsTrigger>
              </TabsList>
              
              <TabsContent value="account" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b bg-muted/50">
                            <th className="py-3 px-4 text-left font-medium">Date & Time</th>
                            <th className="py-3 px-4 text-left font-medium">Activity</th>
                            <th className="py-3 px-4 text-left font-medium">Category</th>
                            <th className="py-3 px-4 text-left font-medium">Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          {accountHistory.map((item) => (
                            <tr key={item.id} className="border-b">
                              <td className="py-3 px-4 whitespace-nowrap">{item.date}</td>
                              <td className="py-3 px-4">{item.activity}</td>
                              <td className="py-3 px-4">
                                <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                                  item.category === "Trade" 
                                    ? "bg-blue-100 text-blue-800" 
                                    : item.category === "Income" 
                                    ? "bg-green-100 text-green-800"
                                    : item.category === "Deposit" 
                                    ? "bg-purple-100 text-purple-800"
                                    : item.category === "Withdrawal" 
                                    ? "bg-orange-100 text-orange-800"
                                    : "bg-gray-100 text-gray-800"
                                }`}>
                                  {item.category}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-muted-foreground">{item.details}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="login" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Login History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b bg-muted/50">
                            <th className="py-3 px-4 text-left font-medium">Date & Time</th>
                            <th className="py-3 px-4 text-left font-medium">Device</th>
                            <th className="py-3 px-4 text-left font-medium">Location</th>
                            <th className="py-3 px-4 text-left font-medium">IP Address</th>
                            <th className="py-3 px-4 text-right font-medium">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {loginHistory.map((item) => (
                            <tr key={item.id} className="border-b">
                              <td className="py-3 px-4 whitespace-nowrap">{item.date}</td>
                              <td className="py-3 px-4">{item.device}</td>
                              <td className="py-3 px-4">{item.location}</td>
                              <td className="py-3 px-4">{item.ipAddress}</td>
                              <td className="py-3 px-4 text-right">
                                <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                                  item.status === "Success" 
                                    ? "bg-green-100 text-green-800" 
                                    : "bg-red-100 text-red-800"
                                }`}>
                                  {item.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default History;
