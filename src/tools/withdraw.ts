import { GateX402Client } from '../lib/api-client';
import { Signer } from '../lib/signer';

export interface WithdrawParams {
    managementToken: string;
    walletPrivateKey: string;
    network: string;
}

export async function withdrawFunds(params: WithdrawParams) {
    const client = new GateX402Client(params.managementToken);
    const signer = new Signer(params.walletPrivateKey);

    // 1. Get Nonce for withdrawal
    const { nonce, message } = await client.post('/agent/nonce', {
        wallet_address: signer.getAddress(),
        action: 'withdraw',
        network: params.network,
    });

    // 2. Sign Message
    const signature = await signer.signMessage(message);

    // 3. Withdraw
    const result = await client.post('/agent/payout/withdraw', {
        wallet_address: signer.getAddress(),
        signature,
        nonce,
        network: params.network,
    });

    return result;
}
