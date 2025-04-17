
import { FC } from "react";
import { Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("bg-card border-b border-border py-3 px-6", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center relative w-64">
          <Search className="absolute left-2 text-muted-foreground" size={18} />
          <Input 
            type="text" 
            placeholder="Search investments..." 
            className="pl-9 bg-background"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-finance-red text-[10px] text-white">3</span>
          </Button>
          
          <div className="flex items-center space-x-3">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-medium">Alex Johnson</div>
              <div className="text-xs text-muted-foreground">Premium Account</div>
            </div>
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full bg-finance-purple text-white">
              <User size={18} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
