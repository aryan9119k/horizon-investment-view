
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  LineChart, 
  PieChart, 
  CircleDollarSign, 
  History, 
  Bell, 
  Settings,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div 
      className={cn(
        "bg-card h-screen transition-all duration-300 border-r border-border flex flex-col",
        isCollapsed ? "w-20" : "w-64",
        className
      )}
    >
      <div className="flex items-center p-4 border-b border-border">
        <div className={cn("flex items-center", isCollapsed ? "justify-center w-full" : "")}>
          <div className="h-8 w-8 rounded-md bg-finance-purple flex items-center justify-center text-white font-bold">
            IM
          </div>
          {!isCollapsed && (
            <span className="ml-2 font-semibold text-lg">InvestMaster</span>
          )}
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className={cn("ml-auto", isCollapsed && "absolute right-2 top-4")}
          onClick={toggleSidebar}
        >
          {isCollapsed ? <Menu size={20} /> : <X size={20} />}
        </Button>
      </div>

      <div className="flex-1 py-6">
        <nav className="space-y-1 px-2">
          <NavItem 
            icon={<LayoutDashboard size={20} />} 
            label="Dashboard" 
            to="/dashboard" 
            isCollapsed={isCollapsed} 
            active={location.pathname === "/dashboard"}
          />
          <NavItem 
            icon={<PieChart size={20} />} 
            label="Portfolio" 
            to="/portfolio" 
            isCollapsed={isCollapsed} 
            active={location.pathname === "/portfolio"}
          />
          <NavItem 
            icon={<LineChart size={20} />} 
            label="Performance" 
            to="/performance" 
            isCollapsed={isCollapsed} 
            active={location.pathname === "/performance"}
          />
          <NavItem 
            icon={<CircleDollarSign size={20} />} 
            label="Transactions" 
            to="/transactions" 
            isCollapsed={isCollapsed} 
            active={location.pathname === "/transactions"}
          />
          <NavItem 
            icon={<History size={20} />} 
            label="History" 
            to="/history" 
            isCollapsed={isCollapsed} 
            active={location.pathname === "/history"}
          />
        </nav>
      </div>

      <div className="p-4 border-t border-border">
        <nav className="space-y-1">
          <NavItem 
            icon={<Bell size={20} />} 
            label="Notifications" 
            to="/notifications" 
            isCollapsed={isCollapsed} 
            active={location.pathname === "/notifications"}
          />
          <NavItem 
            icon={<Settings size={20} />} 
            label="Settings" 
            to="/settings" 
            isCollapsed={isCollapsed} 
            active={location.pathname === "/settings"}
          />
        </nav>
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isCollapsed: boolean;
  active?: boolean;
}

const NavItem: FC<NavItemProps> = ({ icon, label, to, isCollapsed, active }) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "flex items-center py-2 px-3 rounded-md text-sm transition-colors",
        active 
          ? "bg-finance-purple text-white" 
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
        isCollapsed && "justify-center"
      )}
    >
      <span>{icon}</span>
      {!isCollapsed && <span className="ml-3">{label}</span>}
    </Link>
  );
};

export default Sidebar;
