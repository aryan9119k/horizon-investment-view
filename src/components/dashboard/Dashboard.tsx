
import { FC } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import PortfolioSummary from "./PortfolioSummary";
import AssetAllocation from "./AssetAllocation";
import MarketOverview from "./MarketOverview";
import RecentTransactions from "./RecentTransactions";
import PerformanceChart from "./PerformanceChart";
import TopPerformers from "./TopPerformers";
import QuickActions from "./QuickActions";

const Dashboard: FC = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Investment Dashboard</h1>
              <QuickActions />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <PortfolioSummary />
              <PerformanceChart className="lg:col-span-2" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AssetAllocation className="md:col-span-1 lg:col-span-1" />
              <MarketOverview className="md:col-span-1 lg:col-span-1" />
              <RecentTransactions className="md:col-span-2 lg:col-span-1" />
              <TopPerformers className="md:col-span-2 lg:col-span-1" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
