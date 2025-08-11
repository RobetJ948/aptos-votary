import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

// InvestDAO smart contract configuration
export const CONTRACT_ADDRESS = "0xbdffa7eedb36f54c05ee1540b79c606fe5d75f8bbcecf6844a1502a2b1f9cea6";
export const MODULE_NAME = "InvestDAO";

// Aptos client configuration for Devnet
const config = new AptosConfig({ network: Network.DEVNET });
export const aptos = new Aptos(config);

// Utility functions for amount formatting
export const formatAPT = (octas: number): string => {
  return (octas / 100000000).toFixed(4);
};

export const toOctas = (apt: number): number => {
  return Math.floor(apt * 100000000);
};

// Type definitions for smart contract data
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

// Helper function to get full contract address
export const getContractFunction = (functionName: string): string => {
  return `${CONTRACT_ADDRESS}::${MODULE_NAME}::${functionName}`;
};