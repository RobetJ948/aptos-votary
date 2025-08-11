import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

// Contract configuration
export const CONTRACT_ADDRESS = "0xbdffa7eedb36f54c05ee1540b79c606fe5d75f8bbcecf6844a1502a2b1f9cea6";
export const MODULE_NAME = "InvestDAO";

// Aptos client configuration
const config = new AptosConfig({ network: Network.DEVNET });
export const aptos = new Aptos(config);

// Type definitions
export interface Proposal {
  id: number;
  recipient: string;
  requestedAmount: number; // in octas
  yesVotes: number;
  noVotes: number;
  status: 0 | 1 | 2; // Open, Funded, Rejected
  executed: boolean;
}

export interface MemberTokens {
  balance: number;
  stakedBalance: number;
}

export interface TreasuryInfo {
  totalFunds: number; // in octas
  proposalCount: number;
  stakedTokens: number;
}

// Utility functions
export const formatAPT = (octas: number): string => {
  return (octas / 100000000).toFixed(4);
};

export const toOctas = (apt: number): number => {
  return Math.floor(apt * 100000000);
};

export const formatAddress = (address: string): string => {
  if (address.length <= 12) return address;
  return `${address.slice(0, 6)}...${address.slice(-6)}`;
};

// Contract interaction functions
export class DAOService {
  static async joinDAO(): Promise<void> {
    // Implementation will depend on wallet adapter
    throw new Error("Wallet not connected");
  }

  static async getMemberTokens(memberAddress: string): Promise<MemberTokens> {
    try {
      const response = await aptos.view({
        payload: {
          function: `${CONTRACT_ADDRESS}::${MODULE_NAME}::get_member_tokens`,
          functionArguments: [memberAddress],
        }
      });
      
      return {
        balance: Number(response[0]),
        stakedBalance: Number(response[1]),
      };
    } catch (error) {
      console.error("Error fetching member tokens:", error);
      return { balance: 0, stakedBalance: 0 };
    }
  }

  static async getTreasuryInfo(daoAddress: string): Promise<TreasuryInfo> {
    try {
      const response = await aptos.view({
        payload: {
          function: `${CONTRACT_ADDRESS}::${MODULE_NAME}::get_treasury_info`,
          functionArguments: [daoAddress],
        }
      });
      
      return {
        totalFunds: Number(response[0]),
        proposalCount: Number(response[1]),
        stakedTokens: Number(response[2]),
      };
    } catch (error) {
      console.error("Error fetching treasury info:", error);
      return { totalFunds: 0, proposalCount: 0, stakedTokens: 0 };
    }
  }

  static async getProposalInfo(daoAddress: string, proposalId: number): Promise<Proposal | null> {
    try {
      const response = await aptos.view({
        payload: {
          function: `${CONTRACT_ADDRESS}::${MODULE_NAME}::get_proposal_info`,
          functionArguments: [daoAddress, proposalId],
        }
      });
      
      return {
        id: proposalId,
        recipient: response[0] as string,
        requestedAmount: Number(response[1]),
        yesVotes: Number(response[2]),
        noVotes: Number(response[3]),
        status: Number(response[4]) as 0 | 1 | 2,
        executed: Boolean(response[5]),
      };
    } catch (error) {
      console.error("Error fetching proposal info:", error);
      return null;
    }
  }
}