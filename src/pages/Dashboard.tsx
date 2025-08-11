import StatCard from "@/components/StatCard";
import { Wallet, TrendingUp, Users, DollarSign } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-6 pt-24 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gradient mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your InvestDAO dashboard. Monitor your investments and DAO participation.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Your Tokens"
          value="1,250.00"
          subtitle="Available to stake"
          icon={<Wallet className="w-5 h-5 text-primary" />}
        />
        <StatCard
          title="Staked Amount"
          value="800.00"
          subtitle="64% of your tokens"
          icon={<TrendingUp className="w-5 h-5 text-success" />}
          trend="up"
        />
        <StatCard
          title="Voting Power"
          value="12.5%"
          subtitle="Based on stake"
          icon={<Users className="w-5 h-5 text-primary" />}
        />
        <StatCard
          title="Rewards Earned"
          value="45.75 APT"
          subtitle="+8.2% this month"
          icon={<DollarSign className="w-5 h-5 text-success" />}
          trend="up"
        />
      </div>

      {/* Placeholder for future dashboard components */}
      <div className="card-gradient p-8 text-center">
        <h3 className="text-xl font-semibold mb-2">Dashboard Features Coming Soon</h3>
        <p className="text-muted-foreground">
          Treasury overview, recent proposals, and more interactive features will be added here.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;