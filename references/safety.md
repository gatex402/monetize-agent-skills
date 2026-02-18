# Safety Guardrails for GateX402 Skill

When using the GateX402 Agent Skill, agents must adhere to the following safety protocols:

1. **Private Key Isolation**: Never log or expose your private key. The `Signer` class should only be instantiated with keys stored in secure environment variables.
2. **Management Token Privacy**: The `gx4_mgmt_...` tokens are sensitive. Treat them like API keys.
3. **Withdrawal Limits**: Automated withdrawals should be subject to session limits. We recommend using the **Coinbase Agentic Wallet** to enforce spending and transaction limits at the wallet level.
4. **Network Verification**: Double-check the network ID (e.g., `eip155:8453` for Base) before executing withdrawals to avoid gas loss or stuck transactions.
