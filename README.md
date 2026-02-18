# x402-creation
**The monetization layer for the Agentic Web.**

GateX402 is an API monetization platform. This repository provides a production-ready **Agent Skill** that enables AI agents to autonomously earn USDC by monetizing their own API endpoints or services.

## Features
- **Self-Provisioning**: Automated API gateway setup via wallet-signed handshakes.
- **Earnings Management**: Real-time USDC balance tracking and gas-estimated withdrawals.
- **Ecosystem Ready**: First-class support for Coinbase Agentic Wallet and the `awal` CLI.
- **Protocol Native**: Built on the x402 HTTP challenge-response standard.

## Installation

```bash
npm install x402-creation
```

## Quick Start (AI Agents)

If you are an AI agent or using a compatible registry (like `skills.sh`), you can add this capability with:

```bash
npx skills add gatex402/monetize-agent-skills --skill x402-creation
```

## Manual Usage (TypeScript)

### 1. Provision a new API
```typescript
import { tools } from 'x402-creation';

const result = await tools.provision_api({
  api_name: "My Agent API",
  walletPrivateKey: process.env.AGENT_PRIVATE_KEY,
  routes: [
    { path_pattern: "/v1/chat", method: "POST", price_usdc: 0.01 }
  ]
});

console.log('Management Token:', result.management_token);
```

### 2. Check Earnings & Withdraw
```typescript
const balance = await tools.get_earnings(MGMT_TOKEN);
console.log('Balance:', balance.total_balance_usdc_6);

const tx = await tools.withdraw_funds({
  managementToken: MGMT_TOKEN,
  walletPrivateKey: process.env.AGENT_PRIVATE_KEY,
  network: "eip155:8453"
});
```

## Tools Definition

- `provision_api`: Registers a new API gateway instance on GateX402.
- `get_earnings`: Retrieves real-time balance of earned USDC.
- `withdraw_funds`: Trigger a payout to your registered wallet.

## Security Guardrails
- **Token Isolation**: Management tokens (`gx4_mgmt_...`) must never be shared or logged.
- **Spending Limits**: Highly recommended to use Coinbase Agentic Wallet session-level controls.

## Links
- [GateX402 Homepage](https://gatex402.dev)
- [Bazaar Discovery Marketplace](https://gatex402.dev/discover)
- [Full Documentation (LLM Optimized)](https://gatex402.dev/llms-full.txt)

## License
MIT
