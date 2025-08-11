import StatCard from "@/components/StatCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  FileText, 
  Plus, 
  Send,
  Shield,
  AlertTriangle
} from "lucide-react";

const Treasury = () => {
  // Mock treasury data
  const recentTransactions = [
    {
      id: 1,
      type: "Proposal Funding",
      amount: -5000,
      recipient: "0x1234...5678",
      status: "Completed",
      date: "2024-01-15",
    },
    {
      id: 2,
      type: "Member Deposit",
      amount: 2500,
      recipient: "0xabcd...efgh",
      status: "Completed",
      date: "2024-01-14",
    },
    {
      id: 3,
      type: "Token Distribution",
      amount: -1000,
      recipient: "0x9876...1234",
      status: "Pending",
      date: "2024-01-13",
    },
  ];

  return (
    <div className="container mx-auto px-6 pt-24 pb-12">
      {/* Admin Warning */}
      <div className="bg-warning/10 border border-warning/20 rounded-lg p-4 mb-8 flex items-center gap-3">
        <Shield className="w-5 h-5 text-warning flex-shrink-0" />
        <div>
          <p className="text-warning-foreground font-medium">Admin Access Required</p>
          <p className="text-sm text-warning-foreground/80">
            This page contains admin-only functions for treasury management. 
            Connect with an admin wallet to access full functionality.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gradient mb-2">Treasury Management</h1>
        <p className="text-muted-foreground">
          Monitor and manage the DAO's treasury funds, distributions, and financial operations.
        </p>
      </div>

      {/* Treasury Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Treasury"
          value="125,750 APT"
          subtitle="+12.5% this month"
          icon={<DollarSign className="w-5 h-5 text-primary" />}
          trend="up"
        />
        <StatCard
          title="Available Funds"
          value="98,250 APT"
          subtitle="Ready for proposals"
          icon={<TrendingUp className="w-5 h-5 text-success" />}
        />
        <StatCard
          title="Active Members"
          value="127"
          subtitle="Eligible voters"
          icon={<Users className="w-5 h-5 text-primary" />}
        />
        <StatCard
          title="Pending Proposals"
          value="8"
          subtitle="Awaiting execution"
          icon={<FileText className="w-5 h-5 text-warning" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Treasury Actions */}
        <div className="lg:col-span-1">
          <Card className="card-gradient p-6">
            <h2 className="text-xl font-semibold mb-6">Treasury Actions</h2>
            
            <div className="space-y-4">
              <Button variant="hero" className="w-full justify-start">
                <Plus className="w-4 h-4 mr-2" />
                Deposit Funds
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <Send className="w-4 h-4 mr-2" />
                Distribute Tokens
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Execute Proposal
              </Button>
              
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mt-6">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                  <span className="font-medium text-destructive">Admin Only</span>
                </div>
                <p className="text-sm text-destructive/80">
                  These actions require admin wallet connection and proper permissions.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Transactions */}
        <div className="lg:col-span-2">
          <Card className="card-gradient p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Recent Transactions</h2>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border/50"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-medium">{transaction.type}</span>
                      <Badge
                        variant={transaction.status === "Completed" ? "default" : "outline"}
                        className={
                          transaction.status === "Completed"
                            ? "bg-success/20 text-success border-success/30"
                            : "bg-warning/20 text-warning border-warning/30"
                        }
                      >
                        {transaction.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground font-mono">
                      To: {transaction.recipient}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {transaction.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${
                      transaction.amount > 0 ? "text-success" : "text-foreground"
                    }`}>
                      {transaction.amount > 0 ? "+" : ""}{transaction.amount.toLocaleString()} APT
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Treasury Analytics Placeholder */}
      <div className="mt-8">
        <Card className="card-gradient p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
          <p className="text-muted-foreground mb-4">
            Detailed treasury analytics, fund flow charts, and financial reports will be displayed here.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Monthly Inflow</p>
              <p className="text-lg font-semibold text-primary">+15,750 APT</p>
            </div>
            <div className="bg-muted/20 border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Monthly Outflow</p>
              <p className="text-lg font-semibold">-8,500 APT</p>
            </div>
            <div className="bg-success/10 border border-success/20 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Net Growth</p>
              <p className="text-lg font-semibold text-success">+7,250 APT</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Treasury;