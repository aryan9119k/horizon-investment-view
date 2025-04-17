
import { FC, useState } from "react";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bell, 
  CheckCheck, 
  AlertTriangle, 
  Info, 
  DollarSign, 
  Settings, 
  TrendingUp,
  CheckCircle
} from "lucide-react";

interface Notification {
  id: number;
  type: "alert" | "info" | "transaction" | "system";
  title: string;
  message: string;
  date: string;
  read: boolean;
}

const Notifications: FC = () => {
  // Sample notifications data
  const initialNotifications: Notification[] = [
    {
      id: 1,
      type: "alert",
      title: "Unusual Login Activity",
      message: "We detected a login from a new device in San Francisco, CA. If this wasn't you, please secure your account.",
      date: "2025-04-17 09:32:18",
      read: false
    },
    {
      id: 2,
      type: "transaction",
      title: "Trade Executed",
      message: "Your order to purchase 10 shares of Apple Inc. (AAPL) was executed at $182.65 per share.",
      date: "2025-04-15 14:20:45",
      read: false
    },
    {
      id: 3,
      type: "info",
      title: "Dividend Payment",
      message: "You received a dividend payment of $55.20 from Coca-Cola Co. (KO).",
      date: "2025-04-10 10:15:32",
      read: true
    },
    {
      id: 4,
      type: "system",
      title: "Portfolio Rebalancing Complete",
      message: "Your quarterly portfolio rebalancing has been completed successfully.",
      date: "2025-04-08 16:42:50",
      read: true
    },
    {
      id: 5,
      type: "transaction",
      title: "Deposit Successful",
      message: "Your deposit of $5,000.00 has been successfully credited to your account.",
      date: "2025-04-05 11:23:17",
      read: true
    },
    {
      id: 6,
      type: "alert",
      title: "Price Alert: NVDA",
      message: "NVIDIA Corp. (NVDA) has dropped by more than 5% today, currently trading at $892.45.",
      date: "2025-04-03 13:48:22",
      read: true
    },
    {
      id: 7,
      type: "info",
      title: "Market Close Summary",
      message: "The S&P 500 closed up 0.7% today. Your portfolio gained 0.9%, outperforming the market.",
      date: "2025-04-02 16:30:00",
      read: true
    },
    {
      id: 8,
      type: "system",
      title: "Two-Factor Authentication Enabled",
      message: "You have successfully enabled two-factor authentication for your account.",
      date: "2025-03-30 09:15:42",
      read: true
    }
  ];

  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      read: true
    })));
  };
  
  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };
  
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "alert":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />;
      case "transaction":
        return <DollarSign className="h-5 w-5 text-green-500" />;
      case "system":
        return <Settings className="h-5 w-5 text-purple-500" />;
      default:
        return <Bell className="h-5 w-5" />;
    }
  };

  const unreadCount = notifications.filter(notification => !notification.read).length;

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">Notifications</h1>
                {unreadCount > 0 && (
                  <span className="bg-finance-purple text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {unreadCount} new
                  </span>
                )}
              </div>
              {unreadCount > 0 && (
                <Button 
                  variant="outline" 
                  onClick={markAllAsRead} 
                  className="flex items-center gap-1"
                >
                  <CheckCheck className="h-4 w-4" />
                  Mark all as read
                </Button>
              )}
            </div>
            
            <Tabs defaultValue="all">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="alerts">Alerts</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
                <TabsTrigger value="info">Information</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <Card>
                  <CardHeader>
                    <CardTitle>All Notifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {notifications.length > 0 ? (
                        notifications.map((notification) => (
                          <div 
                            key={notification.id} 
                            className={`border rounded-lg p-4 ${notification.read ? 'bg-card' : 'bg-muted/20'}`}
                          >
                            <div className="flex items-start gap-4">
                              <div className="mt-1">
                                {getNotificationIcon(notification.type)}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h3 className={`font-medium ${!notification.read && 'font-semibold'}`}>
                                    {notification.title}
                                  </h3>
                                  <span className="text-xs text-muted-foreground">
                                    {notification.date}
                                  </span>
                                </div>
                                <p className="text-sm mt-1 text-muted-foreground">
                                  {notification.message}
                                </p>
                              </div>
                              {!notification.read && (
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={() => markAsRead(notification.id)}
                                  className="h-8 w-8 p-0"
                                >
                                  <CheckCircle className="h-4 w-4" />
                                  <span className="sr-only">Mark as read</span>
                                </Button>
                              )}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-10">
                          <Bell className="h-12 w-12 mx-auto text-muted-foreground" />
                          <p className="mt-2 text-muted-foreground">You have no notifications</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="alerts">
                <Card>
                  <CardHeader>
                    <CardTitle>Alerts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {notifications.filter(n => n.type === "alert").length > 0 ? (
                        notifications
                          .filter(n => n.type === "alert")
                          .map((notification) => (
                            <div 
                              key={notification.id} 
                              className={`border rounded-lg p-4 ${notification.read ? 'bg-card' : 'bg-muted/20'}`}
                            >
                              <div className="flex items-start gap-4">
                                <div className="mt-1">
                                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <h3 className={`font-medium ${!notification.read && 'font-semibold'}`}>
                                      {notification.title}
                                    </h3>
                                    <span className="text-xs text-muted-foreground">
                                      {notification.date}
                                    </span>
                                  </div>
                                  <p className="text-sm mt-1 text-muted-foreground">
                                    {notification.message}
                                  </p>
                                </div>
                                {!notification.read && (
                                  <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    onClick={() => markAsRead(notification.id)}
                                    className="h-8 w-8 p-0"
                                  >
                                    <CheckCircle className="h-4 w-4" />
                                    <span className="sr-only">Mark as read</span>
                                  </Button>
                                )}
                              </div>
                            </div>
                          ))
                      ) : (
                        <div className="text-center py-10">
                          <AlertTriangle className="h-12 w-12 mx-auto text-muted-foreground" />
                          <p className="mt-2 text-muted-foreground">No alerts</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="transactions">
                <Card>
                  <CardHeader>
                    <CardTitle>Transactions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {notifications.filter(n => n.type === "transaction").length > 0 ? (
                        notifications
                          .filter(n => n.type === "transaction")
                          .map((notification) => (
                            <div 
                              key={notification.id} 
                              className={`border rounded-lg p-4 ${notification.read ? 'bg-card' : 'bg-muted/20'}`}
                            >
                              <div className="flex items-start gap-4">
                                <div className="mt-1">
                                  <DollarSign className="h-5 w-5 text-green-500" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <h3 className={`font-medium ${!notification.read && 'font-semibold'}`}>
                                      {notification.title}
                                    </h3>
                                    <span className="text-xs text-muted-foreground">
                                      {notification.date}
                                    </span>
                                  </div>
                                  <p className="text-sm mt-1 text-muted-foreground">
                                    {notification.message}
                                  </p>
                                </div>
                                {!notification.read && (
                                  <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    onClick={() => markAsRead(notification.id)}
                                    className="h-8 w-8 p-0"
                                  >
                                    <CheckCircle className="h-4 w-4" />
                                    <span className="sr-only">Mark as read</span>
                                  </Button>
                                )}
                              </div>
                            </div>
                          ))
                      ) : (
                        <div className="text-center py-10">
                          <DollarSign className="h-12 w-12 mx-auto text-muted-foreground" />
                          <p className="mt-2 text-muted-foreground">No transaction notifications</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="info">
                <Card>
                  <CardHeader>
                    <CardTitle>Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {notifications.filter(n => n.type === "info" || n.type === "system").length > 0 ? (
                        notifications
                          .filter(n => n.type === "info" || n.type === "system")
                          .map((notification) => (
                            <div 
                              key={notification.id} 
                              className={`border rounded-lg p-4 ${notification.read ? 'bg-card' : 'bg-muted/20'}`}
                            >
                              <div className="flex items-start gap-4">
                                <div className="mt-1">
                                  {notification.type === "info" ? (
                                    <Info className="h-5 w-5 text-blue-500" />
                                  ) : (
                                    <Settings className="h-5 w-5 text-purple-500" />
                                  )}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <h3 className={`font-medium ${!notification.read && 'font-semibold'}`}>
                                      {notification.title}
                                    </h3>
                                    <span className="text-xs text-muted-foreground">
                                      {notification.date}
                                    </span>
                                  </div>
                                  <p className="text-sm mt-1 text-muted-foreground">
                                    {notification.message}
                                  </p>
                                </div>
                                {!notification.read && (
                                  <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    onClick={() => markAsRead(notification.id)}
                                    className="h-8 w-8 p-0"
                                  >
                                    <CheckCircle className="h-4 w-4" />
                                    <span className="sr-only">Mark as read</span>
                                  </Button>
                                )}
                              </div>
                            </div>
                          ))
                      ) : (
                        <div className="text-center py-10">
                          <Info className="h-12 w-12 mx-auto text-muted-foreground" />
                          <p className="mt-2 text-muted-foreground">No information notifications</p>
                        </div>
                      )}
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

export default Notifications;
