import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatCard from "@/components/StatCard";
import { TrendingUp, Coins, Target, Award } from "lucide-react";

const Stake = () => {
  const [stakeAmount, setStakeAmount] = useState("");
  const [unstakeAmount, setUnstakeAmount] = useState("");

  return (
    <div className="container mx-auto px-6 pt-24 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gradient mb-2">Stake Tokens</h1>
        <p className="text-muted-foreground">
          Stake your governance tokens to earn voting power and participate in DAO decisions.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Available Balance"
          value="1,250.00 APT"
          subtitle="Ready to stake"
          icon={<Coins className="w-5 h-5 text-primary" />}
        />
        <StatCard
          title="Staked Balance"
          value="800.00 APT"
          subtitle="Currently earning"
          icon={<Target className="w-5 h-5 text-success" />}
        />
        <StatCard
          title="Voting Power"
          value="12.5%"
          subtitle="Of total votes"
          icon={<TrendingUp className="w-5 h-5 text-primary" />}
        />
        <StatCard
          title="Rewards"
          value="45.75 APT"
          subtitle="Total earned"
          icon={<Award className="w-5 h-5 text-success" />}
          trend="up"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Staking Interface */}
        <Card className="card-gradient p-6">
          <h2 className="text-xl font-semibold mb-6">Manage Your Stake</h2>
          
          <Tabs defaultValue="stake" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 bg-muted/20">
              <TabsTrigger value="stake" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                Stake Tokens
              </TabsTrigger>
              <TabsTrigger value="unstake" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                Unstake
              </TabsTrigger>
            </TabsList>

            <TabsContent value="stake" className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Amount to Stake</label>
                <div className="relative">
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={stakeAmount}
                    onChange={(e) => setStakeAmount(e.target.value)}
                    className="pr-16 bg-muted/20 border-border"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground">
                    APT
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Available: 1,250.00 APT
                </p>
              </div>

              <div className="flex gap-2 mb-4">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setStakeAmount("250")}
                  className="text-xs"
                >
                  25%
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setStakeAmount("500")}
                  className="text-xs"
                >
                  50%
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setStakeAmount("1000")}
                  className="text-xs"
                >
                  75%
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setStakeAmount("1250")}
                  className="text-xs"
                >
                  MAX
                </Button>
              </div>

              {stakeAmount && (
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Staking Amount:</span>
                    <span className="font-medium">{stakeAmount} APT</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>New Voting Power:</span>
                    <span className="font-medium text-primary">
                      {((parseFloat(stakeAmount || "0") + 800) / 6400 * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              )}

              <Button variant="hero" className="w-full" disabled={!stakeAmount || parseFloat(stakeAmount) <= 0}>
                Stake Tokens
              </Button>
            </TabsContent>

            <TabsContent value="unstake" className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Amount to Unstake</label>
                <div className="relative">
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={unstakeAmount}
                    onChange={(e) => setUnstakeAmount(e.target.value)}
                    className="pr-16 bg-muted/20 border-border"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground">
                    APT
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Staked: 800.00 APT
                </p>
              </div>

              <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                <p className="text-sm text-warning-foreground">
                  <strong>Note:</strong> Unstaking is not currently available in the smart contract. 
                  This feature will be added in a future update.
                </p>
              </div>

              <Button 
                variant="outline" 
                className="w-full" 
                disabled
              >
                Unstake (Coming Soon)
              </Button>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Staking Info */}
        <Card className="card-gradient p-6">
          <h2 className="text-xl font-semibold mb-6">Staking Information</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">How Staking Works</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Stake your governance tokens to earn voting power</p>
                <p>• Voting power determines your influence on proposals</p>
                <p>• Staked tokens remain locked until unstaking</p>
                <p>• You earn rewards based on your staked amount</p>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Current Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Staked in DAO:</span>
                  <span className="font-medium">64,000 APT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Your Stake Ratio:</span>
                  <span className="font-medium">1.25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Active Stakers:</span>
                  <span className="font-medium">127</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <h4 className="font-medium text-primary mb-2">Pro Tip</h4>
              <p className="text-sm text-muted-foreground">
                The more tokens you stake, the greater your voting power. Consider your 
                long-term commitment when deciding how much to stake.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Stake;