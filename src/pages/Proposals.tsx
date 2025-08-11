import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter } from "lucide-react";

const Proposals = () => {
  // Mock proposal data
  const proposals = [
    {
      id: 1,
      title: "Funding for DeFi Protocol Integration",
      recipient: "0x1234...5678",
      requestedAmount: 5000,
      yesVotes: 75,
      noVotes: 25,
      status: "Open" as const,
      timeRemaining: "5 days",
    },
    {
      id: 2,
      title: "Marketing Campaign Investment",
      recipient: "0xabcd...efgh",
      requestedAmount: 2500,
      yesVotes: 120,
      noVotes: 30,
      status: "Funded" as const,
      timeRemaining: "Completed",
    },
    {
      id: 3,
      title: "Research & Development Grant",
      recipient: "0x9876...1234",
      requestedAmount: 8000,
      yesVotes: 45,
      noVotes: 80,
      status: "Rejected" as const,
      timeRemaining: "Expired",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-primary/20 text-primary border-primary/30";
      case "Funded":
        return "bg-success/20 text-success border-success/30";
      case "Rejected":
        return "bg-destructive/20 text-destructive border-destructive/30";
      default:
        return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  const getVotePercentage = (yes: number, no: number) => {
    const total = yes + no;
    return total > 0 ? (yes / total) * 100 : 0;
  };

  return (
    <div className="container mx-auto px-6 pt-24 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gradient mb-2">Proposals</h1>
          <p className="text-muted-foreground">
            Review and vote on investment proposals submitted to the DAO.
          </p>
        </div>
        <Button variant="hero" className="mt-4 md:mt-0">
          <Plus className="w-4 h-4 mr-2" />
          Create Proposal
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search proposals..."
            className="pl-10 bg-muted/20 border-border"
          />
        </div>
        <Button variant="outline" className="md:w-auto">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Proposals Grid */}
      <div className="grid gap-6">
        {proposals.map((proposal) => (
          <Card key={proposal.id} className="card-gradient p-6 hover:shadow-primary/10 transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className={getStatusColor(proposal.status)}>
                    {proposal.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Proposal #{proposal.id}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {proposal.title}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Recipient:</span>
                    <p className="font-mono text-primary">{proposal.recipient}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Amount:</span>
                    <p className="font-semibold">{proposal.requestedAmount.toLocaleString()} APT</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Time Remaining:</span>
                    <p className="font-medium">{proposal.timeRemaining}</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-80 space-y-4">
                {/* Vote Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-success">Yes: {proposal.yesVotes}</span>
                    <span className="text-destructive">No: {proposal.noVotes}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-success h-2 rounded-full transition-all duration-300"
                      style={{ width: `${getVotePercentage(proposal.yesVotes, proposal.noVotes)}%` }}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-success/20 text-success border border-success/30 hover:bg-success hover:text-success-foreground"
                    disabled={proposal.status !== "Open"}
                  >
                    Vote Yes
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-destructive/30 text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    disabled={proposal.status !== "Open"}
                  >
                    Vote No
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Proposals;