
import { FC } from "react";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const Settings: FC = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
            
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid grid-cols-4 w-full max-w-2xl mb-4">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                <TabsTrigger value="notifications">Email Alerts</TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Update your personal information and contact details.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="Sarah" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Johnson" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue="sarah.johnson@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" defaultValue="123 Main Street" />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" defaultValue="New York" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input id="state" defaultValue="NY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">Zip Code</Label>
                        <Input id="zipCode" defaultValue="10001" />
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="bg-finance-purple hover:bg-finance-deep-purple">
                        Save Changes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="security">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                    <CardDescription>
                      Update your password to keep your account secure.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                    
                    <div className="pt-4">
                      <Button className="bg-finance-purple hover:bg-finance-deep-purple">
                        Update Password
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Two-Factor Authentication</CardTitle>
                    <CardDescription>
                      Add an extra layer of security to your account.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">SMS Authentication</p>
                        <p className="text-sm text-muted-foreground">
                          Receive a verification code via text message.
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Authentication</p>
                        <p className="text-sm text-muted-foreground">
                          Receive a verification code via email.
                        </p>
                      </div>
                      <Switch />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Authenticator App</p>
                        <p className="text-sm text-muted-foreground">
                          Use an authenticator app like Google Authenticator.
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="preferences">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Display Settings</CardTitle>
                    <CardDescription>
                      Customize how information is displayed in your account.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="theme">Theme</Label>
                      <Select defaultValue="light">
                        <SelectTrigger id="theme">
                          <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="currency">Currency Display</Label>
                      <Select defaultValue="usd">
                        <SelectTrigger id="currency">
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usd">USD ($)</SelectItem>
                          <SelectItem value="eur">EUR (€)</SelectItem>
                          <SelectItem value="gbp">GBP (£)</SelectItem>
                          <SelectItem value="jpy">JPY (¥)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="dateFormat">Date Format</Label>
                      <Select defaultValue="mdy">
                        <SelectTrigger id="dateFormat">
                          <SelectValue placeholder="Select date format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                          <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                          <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="bg-finance-purple hover:bg-finance-deep-purple">
                        Save Preferences
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Investment Preferences</CardTitle>
                    <CardDescription>
                      Set your default investment options and risk tolerance.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="riskTolerance">Risk Tolerance</Label>
                      <Select defaultValue="moderate">
                        <SelectTrigger id="riskTolerance">
                          <SelectValue placeholder="Select risk tolerance" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="conservative">Conservative</SelectItem>
                          <SelectItem value="moderate">Moderate</SelectItem>
                          <SelectItem value="aggressive">Aggressive</SelectItem>
                          <SelectItem value="veryAggressive">Very Aggressive</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="investmentGoal">Primary Investment Goal</Label>
                      <Select defaultValue="growth">
                        <SelectTrigger id="investmentGoal">
                          <SelectValue placeholder="Select investment goal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="preservation">Capital Preservation</SelectItem>
                          <SelectItem value="income">Income</SelectItem>
                          <SelectItem value="growth">Growth</SelectItem>
                          <SelectItem value="aggressive">Aggressive Growth</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center space-x-2 pt-2">
                      <Switch id="autoInvest" />
                      <Label htmlFor="autoInvest">Enable automatic investments</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch id="rebalance" defaultChecked />
                      <Label htmlFor="rebalance">Automatically rebalance portfolio quarterly</Label>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="bg-finance-purple hover:bg-finance-deep-purple">
                        Save Preferences
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Email Notification Settings</CardTitle>
                    <CardDescription>
                      Choose which email notifications you would like to receive.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-md border p-4">
                        <h3 className="font-medium mb-2">Account Notifications</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="loginAlert" className="flex-1">
                              Login alerts
                            </Label>
                            <Switch id="loginAlert" defaultChecked />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <Label htmlFor="passwordChange" className="flex-1">
                              Password changes
                            </Label>
                            <Switch id="passwordChange" defaultChecked />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <Label htmlFor="profileUpdate" className="flex-1">
                              Profile updates
                            </Label>
                            <Switch id="profileUpdate" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-md border p-4">
                        <h3 className="font-medium mb-2">Investment Notifications</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="tradeConfirmation" className="flex-1">
                              Trade confirmations
                            </Label>
                            <Switch id="tradeConfirmation" defaultChecked />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <Label htmlFor="depositConfirmation" className="flex-1">
                              Deposit confirmations
                            </Label>
                            <Switch id="depositConfirmation" defaultChecked />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <Label htmlFor="withdrawalConfirmation" className="flex-1">
                              Withdrawal confirmations
                            </Label>
                            <Switch id="withdrawalConfirmation" defaultChecked />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <Label htmlFor="dividendPayments" className="flex-1">
                              Dividend payments
                            </Label>
                            <Switch id="dividendPayments" defaultChecked />
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-md border p-4">
                        <h3 className="font-medium mb-2">Market Alerts</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="priceAlerts" className="flex-1">
                              Price alerts
                            </Label>
                            <Switch id="priceAlerts" defaultChecked />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <Label htmlFor="marketNews" className="flex-1">
                              Market news and updates
                            </Label>
                            <Switch id="marketNews" />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <Label htmlFor="portfolioSummary" className="flex-1">
                              Weekly portfolio summary
                            </Label>
                            <Switch id="portfolioSummary" defaultChecked />
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button className="bg-finance-purple hover:bg-finance-deep-purple">
                          Save Notification Settings
                        </Button>
                      </div>
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

export default Settings;
