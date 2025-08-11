import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Navbar } from "@/components/Navbar";
import { StatCard } from "@/components/StatCard";
import { 
  Coins, 
  Zap, 
  TrendingUp, 
  Users,
  Calculator,
  ArrowRight,
  Info
} from "lucide-react";
import { formatAPT } from "@/lib/aptos";

const Stake = () => {
  const [stakeAmount, setStakeAmount] = useState("");
  const [isStaking, setIsStaking] = useState(false);

  // Mock user data
  const userStats = {
    balance: 1250000000, // 12.5 APT in octas
    stakedBalance: 800000000, // 8 APT in octas
    votingPower: 3.2, // Percentage of total voting power
    totalStaked: 25000000000, // Total staked in DAO
    stakingAPR: 8.5,
  };

  // Mock staking history
  const stakingHistory = [
    {
      id: 1,
      type: "stake" as const,
      amount: 500000000, // 5 APT
      date: "2024-01-15",
      txHash: "0x1234...abcd"
    },
    {
      id: 2,
      type: "stake" as const,
      amount: 300000000, // 3 APT
      date: "2024-01-10",
      txHash: "0x5678...efgh"
    },
  ];

  const calculateVotingPower = (amount: string) => {
    if (!amount || isNaN(Number(amount))) return "0.00";
    const amountInOctas = Number(amount) * 100000000;
    const newTotal = userStats.stakedBalance + amountInOctas;
    const newVotingPower = (newTotal / userStats.totalStaked) * 100;
    return newVotingPower.toFixed(2);
  };

  const handleStake = async () => {
    if (!stakeAmount || isNaN(Number(stakeAmount))) return;
    
    setIsStaking(true);
    // TODO: Implement actual staking logic
    setTimeout(() => {
      setIsStaking(false);
      setStakeAmount("");
    }, 2000);
  };

  const handleMaxClick = () => {
    setStakeAmount(formatAPT(userStats.balance));
  };

  const stakingPercentage = (userStats.stakedBalance / userStats.totalStaked) * 100;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Stake Tokens</h1>
            <p className="text-muted-foreground">
              Stake your APT tokens to gain voting power and participate in DAO governance
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Available Balance"
              value={formatAPT(userStats.balance)}
              description="APT tokens ready to stake"
              icon={Coins}
            />
            <StatCard
              title="Staked Balance"
              value={formatAPT(userStats.stakedBalance)}
              description="Currently staked tokens"
              icon={Zap}
            />
            <StatCard
              title="Voting Power"
              value={`${userStats.votingPower}%`}
              description="Your governance influence"
              icon={TrendingUp}
            />
            <StatCard
              title="Staking APR"
              value={`${userStats.stakingAPR}%`}
              description="Annual percentage rate"
              icon={Calculator}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Staking Interface */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-5 w-5" />
                    <span>Stake Tokens</span>
                  </CardTitle>
                  <CardDescription>
                    Stake your APT tokens to increase your voting power in the DAO
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="stakeAmount">Amount to Stake (APT)</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="stakeAmount"
                        type="number"
                        placeholder="0.00"
                        value={stakeAmount}
                        onChange={(e) => setStakeAmount(e.target.value)}
                        className="flex-1"
                      />
                      <Button 
                        variant="outline" 
                        onClick={handleMaxClick}
                        size="sm"
                      >
                        Max
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Available: {formatAPT(userStats.balance)} APT
                    </p>
                  </div>

                  {/* Staking Calculator */}
                  {stakeAmount && !isNaN(Number(stakeAmount)) && (
                    <div className="p-4 bg-muted/10 border border-border rounded-lg space-y-2">
                      <h4 className="font-medium text-foreground flex items-center space-x-2">
                        <Calculator className="h-4 w-4" />
                        <span>Staking Preview</span>
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">New Staked Balance</p>
                          <p className="font-semibold text-foreground">
                            {(Number(formatAPT(userStats.stakedBalance)) + Number(stakeAmount)).toFixed(4)} APT
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">New Voting Power</p>
                          <p className="font-semibold text-foreground">
                            {calculateVotingPower(stakeAmount)}%
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <Button 
                    onClick={handleStake} 
                    disabled={!stakeAmount || isNaN(Number(stakeAmount)) || Number(stakeAmount) <= 0 || isStaking}
                    className="w-full"
                    size="lg"
                  >
                    {isStaking ? (
                      "Staking..."
                    ) : (
                      <>
                        <Zap className="mr-2 h-4 w-4" />
                        Stake Tokens
                      </>
                    )}
                  </Button>

                  <div className="p-3 bg-muted/5 border border-border rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Info className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-muted-foreground">
                        <p className="font-medium mb-1">Important Notes:</p>
                        <ul className="space-y-1 text-xs">
                          <li>• Staked tokens cannot be unstaked with current contract</li>
                          <li>• Staking increases your voting power in governance</li>
                          <li>• All transactions require gas fees</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Staking Information */}
            <div className="space-y-6">
              {/* Voting Power Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Your Voting Power</span>
                  </CardTitle>
                  <CardDescription>
                    Your influence in DAO governance decisions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Current Power</span>
                    <span className="font-semibold text-foreground">{userStats.votingPower}%</span>
                  </div>
                  <Progress value={stakingPercentage} className="h-3" />
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Your Stake</p>
                      <p className="font-semibold text-foreground">
                        {formatAPT(userStats.stakedBalance)} APT
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Total Staked</p>
                      <p className="font-semibold text-foreground">
                        {formatAPT(userStats.totalStaked)} APT
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Staking History */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Staking History</span>
                  </CardTitle>
                  <CardDescription>
                    Your recent staking transactions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {stakingHistory.length > 0 ? (
                    <div className="space-y-3">
                      {stakingHistory.map((tx) => (
                        <div key={tx.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-secondary rounded-full">
                              <Zap className="h-3 w-3 text-secondary-foreground" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground capitalize">
                                {tx.type}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {tx.date}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-foreground">
                              +{formatAPT(tx.amount)} APT
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {tx.txHash.slice(0, 8)}...
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <p className="text-muted-foreground">No staking history yet</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your staking transactions will appear here
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stake;