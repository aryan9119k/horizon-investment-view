
import { FC } from "react";
import { PlusCircle, RefreshCw, Download, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuickActions: FC = () => {
  return (
    <div className="flex items-center space-x-2 mb-6">
      <Button className="bg-finance-purple hover:bg-finance-deep-purple">
        <PlusCircle size={16} className="mr-2" />
        Add Investment
      </Button>
      <Button variant="outline">
        <RefreshCw size={16} className="mr-2" />
        Refresh
      </Button>
      <Button variant="outline">
        <Download size={16} className="mr-2" />
        Export
      </Button>
      <Button variant="outline">
        <Filter size={16} className="mr-2" />
        Filter
      </Button>
    </div>
  );
};

export default QuickActions;
