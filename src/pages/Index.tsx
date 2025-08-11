import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import StatCard from "@/components/StatCard";
import { 
  ArrowRight, 
  Shield, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Vote, 
  Zap,
  Target,
  Coins,
  FileText,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Decentralized
              <span className="text-gradient block">Investment</span>
              Governance
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Join InvestDAO and participate in collective investment decisions. 
              Stake your tokens, vote on proposals, and help grow our treasury through 
              decentralized governance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/dashboard">
                <Button size="lg" variant="hero" className="text-lg px-8 py-4 h-auto">
                  Launch App
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/proposals">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto border-primary/30 text-primary hover:bg-primary/10">
                  View Proposals
                </Button>
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">$125K</p>
                <p className="text-sm text-muted-foreground">Treasury Value</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">127</p>
                <p className="text-sm text-muted-foreground">Active Members</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">23</p>
                <p className="text-sm text-muted-foreground">Proposals Funded</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">98.5%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">InvestDAO</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of collective investment with transparent, 
              decentralized decision-making powered by blockchain technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-gradient p-8 text-center hover:shadow-primary/20 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 glow-primary">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure & Transparent</h3>
              <p className="text-muted-foreground">
                All transactions and votes are recorded on the Aptos blockchain, 
                ensuring complete transparency and security for all members.
              </p>
            </Card>
            
            <Card className="card-gradient p-8 text-center hover:shadow-primary/20 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 glow-primary">
                <Vote className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Democratic Governance</h3>
              <p className="text-muted-foreground">
                Every token holder has a voice. Stake your tokens to gain voting power 
                and influence investment decisions that matter.
              </p>
            </Card>
            
            <Card className="card-gradient p-8 text-center hover:shadow-primary/20 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 glow-primary">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Growth Focused</h3>
              <p className="text-muted-foreground">
                Our community-driven approach to investment selection helps maximize 
                returns while minimizing risk through collective intelligence.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How <span className="text-gradient">InvestDAO</span> Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in four simple steps and begin participating in 
              decentralized investment governance today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-semibold mb-3">Connect Wallet</h3>
              <p className="text-muted-foreground text-sm">
                Connect your Aptos-compatible wallet and join the DAO community.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-semibold mb-3">Stake Tokens</h3>
              <p className="text-muted-foreground text-sm">
                Stake your governance tokens to earn voting power and participate in decisions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-semibold mb-3">Vote on Proposals</h3>
              <p className="text-muted-foreground text-sm">
                Review investment proposals and cast your votes to influence funding decisions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-semibold mb-3">Earn Rewards</h3>
              <p className="text-muted-foreground text-sm">
                Benefit from successful investments and earn rewards for active participation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Real-Time</span> DAO Statistics
            </h2>
            <p className="text-xl text-muted-foreground">
              Track the performance and growth of our decentralized community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Treasury Balance"
              value="125,750 APT"
              subtitle="+12.5% growth"
              icon={<DollarSign className="w-6 h-6 text-primary" />}
              trend="up"
            />
            <StatCard
              title="Active Proposals"
              value="8"
              subtitle="Awaiting votes"
              icon={<FileText className="w-6 h-6 text-warning" />}
            />
            <StatCard
              title="Total Members"
              value="127"
              subtitle="+23 this month"
              icon={<Users className="w-6 h-6 text-primary" />}
              trend="up"
            />
            <StatCard
              title="Success Rate"
              value="94.2%"
              subtitle="Approved proposals"
              icon={<CheckCircle className="w-6 h-6 text-success" />}
              trend="up"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Join the Future of
              <span className="text-gradient block">Investment Governance?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Connect your wallet and become part of a community-driven investment platform 
              that puts power back in the hands of token holders.
            </p>
            <Link to="/dashboard">
              <Button size="lg" variant="hero" className="text-xl px-12 py-6 h-auto glow-primary">
                Get Started Now
                <Zap className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
