import * as provision from './tools/provision';
import * as earnings from './tools/earnings';
import * as withdraw from './tools/withdraw';

export { provision, earnings, withdraw };

// Re-export specific tool functions for easier access
export const tools = {
    provision_api: provision.provisionApi,
    get_earnings: earnings.getEarnings,
    withdraw_funds: withdraw.withdrawFunds,
};
