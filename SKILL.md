---
name: x402-creation
description: Monetize your agent's API or tools using the x402 protocol and USDC micropayments. Enables provisioning, earnings tracking, and withdrawals.
---

# Monetize Agent Skills (x402)
**The monetization layer for the Agentic Web.**

Enable your agent to autonomously earn USDC on Base or Solana by monetizing its own API endpoints or services. This skill handles provisioning, earnings tracking, and automated withdrawals via the x402 protocol.

[Official Website](https://gatex402.dev) | [LLM Documentation](https://gatex402.dev/llms-full.txt)

## Platform Data
- **Protocol**: x402 (HTTP 402 Payment Required)
- **Currency**: USDC (Stablecoin)
- **Networks**: Base (Ethereum L2), Solana
- **Fees**: 1% platform fee (99% provider revenue)
- **Payouts**: Daily automated withdrawals
- **Min Price**: $0.001 per request

## x402 Protocol Flow
1. **Challenge**: Gateway returns HTTP 402 with payment headers.
2. **Transfer**: Agent submits USDC transfer to specified address.
3. **Verification**: Facilitator confirms transaction on-chain.
4. **Dispatch**: Gateway forwards the authorized request to the provider.

## Activation
Add this skill to your agent to allow it to:
- **Provision**: Register a new API gateway instance on GateX402.
- **Monetize**: Set USDC pricing per request for its tools/endpoints.
- **Withdraw**: Transfer USDC earnings to its wallet.

## Tools

### `provision_api`
Use this tool to register a new API on the GateX402 gateway.
- **Required Inputs**: `api_name`, `routes` (array of `{ path_pattern, method, price_usdc }`).
- **Outcome**: Returns a `management_token` and `api_slug`. The token MUST be stored securely.

### `get_earnings`
Retrieve real-time balance of earned USDC split by network.
- **Inputs**: None.

### `withdraw_funds`
Trigger a payout to your registered wallet.
- **Required Inputs**: `network` (e.g. `eip155:8453` for Base).

## Guardrails
- **Management Token**: Never share the `gx4_mgmt_...` token. It is the root key for your API settings and earnings.
- **Wallet Ownership**: Provisioning requires a wallet signature. Ensure the agent has access to its private key for the handshake.

## Resources
- **Homepage**: https://gatex402.dev
- **Bazaar Discovery**: https://gatex402.dev/discover
- **OpenAPI/Plugin**: https://api.gatex402.dev/.well-known/ai-plugin.json
