import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Navbar } from "@/components/Navbar";
import { 
  Search, 
  Filter, 
  Plus, 
  Clock, 
  Users, 
  DollarSign,
  ChevronRight
} from "lucide-react";
import { formatAPT } from "@/lib/aptos";

const Proposals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock proposals data
  const proposals = [
    {
      id: 1,
      title: "DeFi Protocol Integration Partnership",
      description: "Partnership with major DeFi protocol to expand investment opportunities",
      recipient: "0x1234567890abcdef1234567890abcdef12345678",
      requestedAmount: 500000000, // 5 APT in octas
      yesVotes: 340000000,
      noVotes: 160000000,
      status: "open" as const,
      timeRemaining: "2 days, 14 hours",
      totalVoters: 28
    },
    {
      id: 2,
      title: "Marketing Campaign for Q2 Growth",
      description: "Comprehensive marketing strategy to attract new members and investors",
      recipient: "0xabcdef1234567890abcdef1234567890abcdef12",
      requestedAmount: 320000000, // 3.2 APT in octas
      yesVotes: 280000000,
      noVotes: 40000000,
      status: "funded" as const,
      timeRemaining: "Completed",
      totalVoters: 35
    },
    {
      id: 3,
      title: "Infrastructure Upgrade and Scaling",
      description: "Technical improvements and infrastructure scaling for better performance",
      recipient: "0x9876543210fedcba9876543210fedcba98765432",
      requestedAmount: 850000000, // 8.5 APT in octas
      yesVotes: 420000000,
      noVotes: 380000000,
      status: "open" as const,
      timeRemaining: "5 days, 8 hours",
      totalVoters: 42
    },
    {
      id: 4,
      title: "Legal Compliance and Regulatory Setup",
      description: "Establishing legal framework and regulatory compliance measures",
      recipient: "0xfedcba0987654321fedcba0987654321fedcba09",
      requestedAmount: 180000000, // 1.8 APT in octas
      yesVotes: 90000000,
      noVotes: 410000000,
      status: "rejected" as const,
      timeRemaining: "Expired",
      totalVoters: 24
    },
    {
      id: 5,
      title: "Research & Development Fund",
      description: "Funding for R&D initiatives and innovation projects",
      recipient: "0x1111222233334444555566667777888899990000",
      requestedAmount: 600000000, // 6 APT in octas
      yesVotes: 0,
      noVotes: 0,
      status: "open" as const,
      timeRemaining: "7 days, 23 hours",
      totalVoters: 0
    }
  ];

  const filteredProposals = proposals.filter(proposal => {
    const matchesSearch = proposal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         proposal.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = statusFilter === "all" || proposal.status === statusFilter;
    return matchesSearch && matchesFilter;
  });

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "open":
        return "bg-grey-700 text-white hover:bg-grey-600";
      case "funded":
        return "bg-grey-200 text-grey-800 hover:bg-grey-300";
      case "rejected":
        return "bg-grey-500 text-white hover:bg-grey-400";
      default:
        return "bg-grey-400 text-white";
    }
  };

  const calculateVotePercentage = (yesVotes: number, noVotes: number, isYes: boolean) => {
    const total = yesVotes + noVotes;
    if (total === 0) return 0;
    return isYes ? (yesVotes / total) * 100 : (noVotes / total) * 100;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Investment Proposals</h1>
              <p className="text-muted-foreground">
                Review and vote on investment proposals to shape the DAO's future
              </p>
            </div>
            <Link to="/proposals/create">
              <Button className="mt-4 md:mt-0">
                <Plus className="mr-2 h-4 w-4" />
                Create Proposal
              </Button>
            </Link>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search proposals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex space-x-2">
              <Button
                variant={statusFilter === "all" ? "default" : "outline"}
                onClick={() => setStatusFilter("all")}
                size="sm"
              >
                All
              </Button>
              <Button
                variant={statusFilter === "open" ? "default" : "outline"}
                onClick={() => setStatusFilter("open")}
                size="sm"
              >
                Open
              </Button>
              <Button
                variant={statusFilter === "funded" ? "default" : "outline"}
                onClick={() => setStatusFilter("funded")}
                size="sm"
              >
                Funded
              </Button>
              <Button
                variant={statusFilter === "rejected" ? "default" : "outline"}
                onClick={() => setStatusFilter("rejected")}
                size="sm"
              >
                Rejected
              </Button>
            </div>
          </div>

          {/* Proposals List */}
          <div className="space-y-6">
            {filteredProposals.map((proposal) => (
              <Card key={proposal.id} className="hover:shadow-medium transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm font-medium text-muted-foreground">
                          #{proposal.id}
                        </span>
                        <Badge className={getStatusStyle(proposal.status)}>
                          {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{proposal.title}</CardTitle>
                      <CardDescription className="text-base">
                        {proposal.description}
                      </CardDescription>
                    </div>
                    <Link to={`/proposals/${proposal.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {/* Funding Request */}
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Requested Amount</p>
                        <p className="font-semibold text-foreground">
                          {formatAPT(proposal.requestedAmount)} APT
                        </p>
                      </div>
                    </div>

                    {/* Time Remaining */}
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Time Remaining</p>
                        <p className="font-semibold text-foreground">{proposal.timeRemaining}</p>
                      </div>
                    </div>

                    {/* Voters */}
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Total Voters</p>
                        <p className="font-semibold text-foreground">{proposal.totalVoters}</p>
                      </div>
                    </div>
                  </div>

                  {/* Voting Results */}
                  {proposal.yesVotes + proposal.noVotes > 0 && (
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Voting Results</span>
                        <span className="text-muted-foreground">
                          {formatAPT(proposal.yesVotes + proposal.noVotes)} APT total votes
                        </span>
                      </div>
                      
                      {/* Yes Votes */}
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-foreground">Yes</span>
                          <span className="text-foreground">
                            {formatAPT(proposal.yesVotes)} APT ({Math.round(calculateVotePercentage(proposal.yesVotes, proposal.noVotes, true))}%)
                          </span>
                        </div>
                        <Progress 
                          value={calculateVotePercentage(proposal.yesVotes, proposal.noVotes, true)} 
                          className="h-2"
                        />
                      </div>

                      {/* No Votes */}
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-foreground">No</span>
                          <span className="text-foreground">
                            {formatAPT(proposal.noVotes)} APT ({Math.round(calculateVotePercentage(proposal.yesVotes, proposal.noVotes, false))}%)
                          </span>
                        </div>
                        <Progress 
                          value={calculateVotePercentage(proposal.yesVotes, proposal.noVotes, false)} 
                          className="h-2"
                        />
                      </div>
                    </div>
                  )}

                  {/* No votes yet */}
                  {proposal.yesVotes + proposal.noVotes === 0 && (
                    <div className="text-center py-4 border border-border rounded-lg bg-muted/10">
                      <p className="text-muted-foreground">No votes cast yet. Be the first to vote!</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProposals.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg mb-4">No proposals found</p>
              <p className="text-muted-foreground mb-6">
                {searchTerm || statusFilter !== "all" 
                  ? "Try adjusting your search or filter criteria" 
                  : "Be the first to create a proposal!"}
              </p>
              {!searchTerm && statusFilter === "all" && (
                <Link to="/proposals/create">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Create First Proposal
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Proposals;