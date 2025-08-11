import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";
import { Navbar } from "@/components/Navbar";
import { 
  Wallet, 
  TrendingUp, 
  Users, 
  Vote, 
  Coins, 
  FileText, 
  Plus,
  Zap
} from "lucide-react";
import { formatAPT } from "@/lib/aptos";

const Dashboard = () => {
  const [isConnected] = useState(false); // TODO: Connect to wallet adapter
  const [stats, setStats] = useState({
    balance: 0,
    stakedBalance: 0,
    votingPower: 0,
    treasuryBalance: 1250000000, // 12.5 APT in octas
    totalProposals: 8,
    activeMembers: 42,
  });

  // Mock data for recent proposals
  const recentProposals = [
    {
      id: 1,
      title: "DeFi Protocol Integration",
      status: "open" as const,
      votingEnds: "2 days",
      amount: "5.0000"
    },
    {
      id: 2,
      title: "Marketing Campaign Fund",
      status: "funded" as const,
      votingEnds: "Completed",
      amount: "3.2000"
    },
    {
      id: 3,
      title: "Infrastructure Upgrade",
      status: "open" as const,
      votingEnds: "5 days",
      amount: "8.5000"
    }
  ];

  // Redirect to connect wallet if not connected
  if (!isConnected) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <div className="max-w-md mx-auto text-center">
            <Wallet className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">Connect Your Wallet</h1>
            <p className="text-muted-foreground mb-6">
              Connect your wallet to access the InvestDAO dashboard and participate in governance.
            </p>
            <Button size="lg" className="w-full">
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </Button>
          </div>
        </div>
      </>
    );
  }

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "open":
        return "bg-grey-700 text-white";
      case "funded":
        return "bg-grey-200 text-grey-800";
      case "rejected":
        return "bg-grey-500 text-white";
      default:
        return "bg-grey-400 text-white";
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome to InvestDAO</h1>
            <p className="text-muted-foreground">
              Manage your tokens, participate in governance, and help shape the future of decentralized investing.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Token Balance"
              value={formatAPT(stats.balance)}
              description="Available APT tokens"
              icon={Coins}
            />
            <StatCard
              title="Staked Balance"
              value={formatAPT(stats.stakedBalance)}
              description="Tokens staked for voting"
              icon={Zap}
            />
            <StatCard
              title="Voting Power"
              value={`${stats.votingPower}%`}
              description="Your governance influence"
              icon={Vote}
            />
            <StatCard
              title="Treasury Balance"
              value={formatAPT(stats.treasuryBalance)}
              description="Total DAO funds"
              icon={TrendingUp}
            />
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Coins className="h-5 w-5" />
                  <span>Stake Tokens</span>
                </CardTitle>
                <CardDescription>
                  Stake your tokens to gain voting power and participate in governance decisions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Current staked: {formatAPT(stats.stakedBalance)} APT</p>
                    <p className="text-sm text-muted-foreground">Available: {formatAPT(stats.balance)} APT</p>
                  </div>
                  <Link to="/stake">
                    <Button variant="default">
                      <Zap className="mr-2 h-4 w-4" />
                      Stake Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Create Proposal</span>
                </CardTitle>
                <CardDescription>
                  Submit investment proposals and request funding from the DAO treasury.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total proposals: {stats.totalProposals}</p>
                    <p className="text-sm text-muted-foreground">Treasury: {formatAPT(stats.treasuryBalance)} APT</p>
                  </div>
                  <Link to="/proposals/create">
                    <Button variant="secondary">
                      <Plus className="mr-2 h-4 w-4" />
                      New Proposal
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Proposals */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Vote className="h-5 w-5" />
                  <span>Recent Proposals</span>
                </div>
                <Link to="/proposals">
                  <Button variant="outline" size="sm">View All</Button>
                </Link>
              </CardTitle>
              <CardDescription>
                Latest investment proposals requiring your attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentProposals.map((proposal) => (
                  <div key={proposal.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-foreground">
                          #{proposal.id}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusStyle(proposal.status)}`}>
                          {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
                        </span>
                      </div>
                      <h4 className="font-medium text-foreground mt-1">{proposal.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {proposal.amount} APT • {proposal.votingEnds}
                      </p>
                    </div>
                    <Link to={`/proposals/${proposal.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;