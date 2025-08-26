import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { StatsCard } from "@/components/StatCard";
import { SalesChart } from "@/components/SalesChart";
import { TrafficSources } from "@/components/TrafficSource";
import { RecentCustomers } from "@/components/RecentCustomers";
import { SalesTable } from "@/components/SalesTable";
import { Select } from "@/components/ui/Select";
import { ShoppingBag, DollarSign, ShoppingCart, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="h-screen bg-white flex overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-secondary overflow-hidden">
        <Header />

        <main className="flex-1 p-6 overflow-y-auto h-screen">
          {/* Welcome Section */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl leading-9 font-bold text-foreground mb-1">Hey Olivia</h1>
              <p className="text-muted-foreground">Here's what's happening with your store today</p>
            </div>
            <Select
              className="ml-auto"
              defaultValue="yearly"
              options={[
                {
                  items: [
                    { value: "yearly", label: "Yearly" },
                    { value: "monthly", label: "Monthly" },
                    { value: "weekly", label: "Weekly" }
                  ]
                }
              ]}
            />
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Today's Sale"
              value="$12,426"
              change="36%"
              changeType="positive"
              icon={ShoppingBag}
              variant="primary"
            />
            <StatsCard
              title="Total Sales"
              value="$13,356"
              change="36%"
              changeType="positive"
              icon={DollarSign}
            />
            <StatsCard
              title="Total Orders"
              value="$10,545"
              change="36%"
              changeType="negative"
              icon={ShoppingCart}
            />
            <StatsCard
              title="Total Customers"
              value="$13,245"
              change="36%"
              changeType="positive"
              icon={Users}
            />
          </div>

          {/* Charts and Data */}
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            <div className="lg:col-span-2 xl:col-span-3 space-y-4">
              <SalesChart />
              <SalesTable />
            </div>
            <div className="space-y-5">
              <TrafficSources />
              <RecentCustomers />
            </div>
          </div>


        </main>
      </div>
    </div>
  );
};

export default Index;
