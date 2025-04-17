
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would authenticate the user
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="h-12 w-12 rounded-lg bg-finance-purple flex items-center justify-center text-white font-bold mx-auto mb-4">
            IM
          </div>
          <h1 className="text-3xl font-bold">InvestMaster</h1>
          <p className="text-muted-foreground mt-2">Log in to access your investment dashboard</p>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl">Log In</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/forgot-password" className="text-sm text-finance-purple hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <Button type="submit" className="w-full bg-finance-purple hover:bg-finance-deep-purple">
                Log In
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-2">
            <div className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-finance-purple hover:underline font-medium">
                Sign up
              </Link>
            </div>
            <div className="text-xs text-muted-foreground">
              By logging in, you agree to our Terms of Service and Privacy Policy
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
