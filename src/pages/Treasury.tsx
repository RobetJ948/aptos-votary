import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/Navbar";
import { StatCard } from "@/components/StatCard";
import { 
  Vault, 
  TrendingUp, 
  Users, 
  FileText,
  Plus,
  Send,
  History,
  Settings,
  Crown
} from "lucide-react";
import { formatAPT } from "@/lib/aptos";

const Treasury = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [distributionAmount, setDistributionAmount] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [isAdmin] = useState(true); // TODO: Connect to actual admin check
  const [isDepositing, setIsDepositing] = useState(false);
  const [isDistributing, setIsDistributing] = useState(false);

  // Mock treasury data
  const treasuryStats = {
    totalFunds: 2750000000, // 27.5 APT in octas
    totalProposals: 12,
    fundedProposals: 7,
    totalMembers: 58,
    totalStaked: 18500000000, // 185 APT in octas
  };

  // Mock transaction history
  const recentTransactions = [
    {
      id: 1,
      type: "deposit" as const,
      amount: 500000000, // 5 APT
      address: "0x1234567890abcdef1234567890abcdef12345678",
      date: "2024-01-16",
      description: "Treasury deposit"
    },
    {
      id: 2,
      type: "proposal_funding" as const,
      amount: -320000000, // -3.2 APT
      address: "0xabcdef1234567890abcdef1234567890abcdef12",
      date: "2024-01-15",
      description: "Marketing Campaign Fund"
    },
    {
      id: 3,
      type: "distribution" as const,
      amount: -200000000, // -2 APT
      address: "0x9876543210fedcba9876543210fedcba98765432",
      date: "2024-01-14",
      description: "Token distribution to member"
    },
  ];

  // Mock pending proposals that can be executed
  const pendingExecutions = [
    {
      id: 2,
      title: "Marketing Campaign Fund",
      recipient: "0xabcdef1234567890abcdef1234567890abcdef12",
      amount: 320000000, // 3.2 APT
      yesVotes: 280000000,
      noVotes: 40000000,
    }
  ];

  const handleDeposit = async () => {
    if (!depositAmount || isNaN(Number(depositAmount))) return;
    setIsDepositing(true);
    // TODO: Implement actual deposit logic
    setTimeout(() => {
      setIsDepositing(false);
      setDepositAmount("");
    }, 2000);
  };

  const handleDistribution = async () => {
    if (!distributionAmount || !recipientAddress || isNaN(Number(distributionAmount))) return;
    setIsDistributing(true);
    // TODO: Implement actual distribution logic
    setTimeout(() => {
      setIsDistributing(false);
      setDistributionAmount("");
      setRecipientAddress("");
    }, 2000);
  };

  const handleExecuteProposal = async (proposalId: number) => {
    // TODO: Implement proposal execution
    console.log(`Executing proposal ${proposalId}`);
  };

  if (!isAdmin) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <div className="max-w-md mx-auto text-center">
            <Crown className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">Admin Access Required</h1>
            <p className="text-muted-foreground mb-6">
              You need admin privileges to access the treasury management interface.
            </p>
            <Button variant="outline" onClick={() => window.history.back()}>
              Go Back
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-2">
              <Crown className="h-6 w-6 text-foreground" />
              <h1 className="text-3xl font-bold text-foreground">Treasury Management</h1>
            </div>
            <p className="text-muted-foreground">
              Manage DAO funds, execute proposals, and distribute tokens to members
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Funds"
              value={formatAPT(treasuryStats.totalFunds)}
              description="APT available in treasury"
              icon={Vault}
            />
            <StatCard
              title="Total Proposals"
              value={treasuryStats.totalProposals.toString()}
              description={`${treasuryStats.fundedProposals} funded`}
              icon={FileText}
            />
            <StatCard
              title="Active Members"
              value={treasuryStats.totalMembers.toString()}
              description="DAO participants"
              icon={Users}
            />
            <StatCard
              title="Total Staked"
              value={formatAPT(treasuryStats.totalStaked)}
              description="Tokens staked for voting"
              icon={TrendingUp}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Treasury Management */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Plus className="h-5 w-5" />
                    <span>Deposit Funds</span>
                  </CardTitle>
                  <CardDescription>
                    Add APT tokens to the DAO treasury
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="depositAmount">Amount (APT)</Label>
                    <Input
                      id="depositAmount"
                      type="number"
                      placeholder="0.00"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                    />
                  </div>
                  <Button 
                    onClick={handleDeposit}
                    disabled={!depositAmount || isNaN(Number(depositAmount)) || isDepositing}
                    className="w-full"
                  >
                    {isDepositing ? (
                      "Depositing..."
                    ) : (
                      <>
                        <Plus className="mr-2 h-4 w-4" />
                        Deposit to Treasury
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Distribute Tokens</span>
                  </CardTitle>
                  <CardDescription>
                    Send tokens to DAO members
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="recipientAddress">Recipient Address</Label>
                    <Input
                      id="recipientAddress"
                      placeholder="0x..."
                      value={recipientAddress}
                      onChange={(e) => setRecipientAddress(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="distributionAmount">Amount (APT)</Label>
                    <Input
                      id="distributionAmount"
                      type="number"
                      placeholder="0.00"
                      value={distributionAmount}
                      onChange={(e) => setDistributionAmount(e.target.value)}
                    />
                  </div>
                  <Button 
                    onClick={handleDistribution}
                    disabled={!distributionAmount || !recipientAddress || isNaN(Number(distributionAmount)) || isDistributing}
                    className="w-full"
                  >
                    {isDistributing ? (
                      "Distributing..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Distribute Tokens
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Proposal Execution */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="h-5 w-5" />
                    <span>Execute Proposals</span>
                  </CardTitle>
                  <CardDescription>
                    Execute approved funding proposals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {pendingExecutions.length > 0 ? (
                    <div className="space-y-4">
                      {pendingExecutions.map((proposal) => (
                        <div key={proposal.id} className="p-4 border border-border rounded-lg">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-medium text-foreground">#{proposal.id} {proposal.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                Amount: {formatAPT(proposal.amount)} APT
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-sm mb-3">
                            <span className="text-muted-foreground">
                              Yes: {formatAPT(proposal.yesVotes)} APT | No: {formatAPT(proposal.noVotes)} APT
                            </span>
                          </div>
                          <Button 
                            onClick={() => handleExecuteProposal(proposal.id)}
                            size="sm"
                            className="w-full"
                          >
                            Execute Proposal
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <Settings className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                      <p className="text-muted-foreground">No proposals ready for execution</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recent Transactions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <History className="h-5 w-5" />
                <span>Recent Transactions</span>
              </CardTitle>
              <CardDescription>
                Treasury activity and fund movements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${
                        tx.type === "deposit" 
                          ? "bg-grey-200 text-grey-800" 
                          : "bg-grey-700 text-white"
                      }`}>
                        {tx.type === "deposit" ? (
                          <Plus className="h-4 w-4" />
                        ) : (
                          <Send className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{tx.description}</p>
                        <p className="text-sm text-muted-foreground">
                          {tx.address.slice(0, 8)}...{tx.address.slice(-8)} • {tx.date}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${
                        tx.amount > 0 ? "text-foreground" : "text-muted-foreground"
                      }`}>
                        {tx.amount > 0 ? "+" : ""}{formatAPT(Math.abs(tx.amount))} APT
                      </p>
                    </div>
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

export default Treasury;