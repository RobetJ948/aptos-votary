import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/StatCard";
import { 
  Building, 
  Wallet, 
  Vote, 
  TrendingUp, 
  Users, 
  Coins,
  Shield,
  Target,
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { formatAPT } from "@/lib/aptos";

const Index = () => {
  // Mock statistics for demo
  const daoStats = {
    treasuryBalance: 2750000000, // 27.5 APT in octas
    totalProposals: 12,
    activeMembers: 58,
    totalStaked: 18500000000, // 185 APT in octas
  };

  const features = [
    {
      icon: Vote,
      title: "Democratic Governance",
      description: "Vote on investment proposals and shape the future of the DAO with your staked tokens."
    },
    {
      icon: Shield,
      title: "Secure Treasury",
      description: "Smart contract-managed treasury ensures transparent and secure fund management."
    },
    {
      icon: Target,
      title: "Investment Opportunities",
      description: "Access exclusive investment opportunities vetted and approved by the community."
    },
    {
      icon: Zap,
      title: "Staking Rewards",
      description: "Stake your tokens to gain voting power and earn rewards from successful investments."
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Connect Wallet",
      description: "Connect your Aptos wallet and join the DAO to receive governance tokens."
    },
    {
      step: "2",
      title: "Stake Tokens",
      description: "Stake your APT tokens to gain voting power in governance decisions."
    },
    {
      step: "3",
      title: "Vote & Participate",
      description: "Review proposals and vote to approve funding for promising investments."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Building className="h-8 w-8 text-foreground" />
              <span className="text-xl font-bold text-foreground">InvestDAO</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <Button>
                <Wallet className="mr-2 h-4 w-4" />
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Decentralized Investment
              <span className="block text-muted-foreground">Made Simple</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join InvestDAO and participate in community-driven investment decisions. 
              Stake tokens, vote on proposals, and earn from successful investments.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="px-8">
                <Wallet className="mr-2 h-5 w-5" />
                Join DAO Now
              </Button>
              <Link to="/proposals">
                <Button variant="outline" size="lg" className="px-8">
                  View Proposals
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">DAO Statistics</h2>
            <p className="text-muted-foreground">Real-time metrics of our growing community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Treasury Balance"
              value={`${formatAPT(daoStats.treasuryBalance)} APT`}
              description="Total funds managed"
              icon={TrendingUp}
            />
            <StatCard
              title="Active Proposals"
              value={daoStats.totalProposals.toString()}
              description="Investment opportunities"
              icon={Vote}
            />
            <StatCard
              title="DAO Members"
              value={daoStats.activeMembers.toString()}
              description="Community participants"
              icon={Users}
            />
            <StatCard
              title="Total Staked"
              value={`${formatAPT(daoStats.totalStaked)} APT`}
              description="Governance power"
              icon={Coins}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose InvestDAO?</h2>
            <p className="text-muted-foreground">Experience the power of decentralized investment</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow duration-200">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-foreground mb-2" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground">Get started in three simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Investing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join our community of investors and start participating in decentralized governance today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="px-8">
              <Wallet className="mr-2 h-5 w-5" />
              Connect Wallet & Join
            </Button>
            <Link to="/proposals">
              <Button variant="outline" size="lg" className="px-8">
                Explore Proposals
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Building className="h-6 w-6 text-secondary-foreground" />
              <span className="text-lg font-bold text-secondary-foreground">InvestDAO</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Built on Aptos</span>
              <span>•</span>
              <span>Powered by Community</span>
              <span>•</span>
              <span>Secured by Smart Contracts</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
