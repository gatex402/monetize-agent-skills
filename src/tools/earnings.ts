import { GateX402Client } from '../lib/api-client';

export async function getEarnings(managementToken: string) {
    const client = new GateX402Client(managementToken);
    return await client.get('/agent/payout/balance');
}
