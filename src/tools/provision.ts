import { GateX402Client } from '../lib/api-client';
import { Signer } from '../lib/signer';

export interface ProvisionParams {
    api_name: string;
    routes: Array<{
        path_pattern: string;
        method: 'GET' | 'POST' | 'PUT' | 'DELETE';
        price_usdc: number;
    }>;
    walletPrivateKey: string;
}

export async function provisionApi(params: ProvisionParams) {
    const client = new GateX402Client();
    const signer = new Signer(params.walletPrivateKey);
    const walletAddress = signer.getAddress();

    // 1. Get Nonce
    const { nonce, message } = await client.post('/agent/nonce', {
        wallet_address: walletAddress,
        action: 'provision',
    });

    // 2. Sign Message
    const signature = await signer.signMessage(message);

    // 3. Provision
    const result = await client.post('/agent/provision', {
        wallet_address: walletAddress,
        signature,
        nonce,
        api_name: params.api_name,
        routes: params.routes,
    });

    return result; // contains management_token, provider_id, api_slug
}
