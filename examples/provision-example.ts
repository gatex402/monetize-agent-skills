import { tools } from '../src';
import * as dotenv from 'dotenv';
dotenv.config();

async function main() {
    const privateKey = process.env.AGENT_PRIVATE_KEY;
    if (!privateKey) throw new Error("AGENT_PRIVATE_KEY required");

    console.log("🚀 Starting Agent API Provisioning...");

    try {
        const result = await tools.provision_api({
            api_name: "Autonomous Agent API",
            walletPrivateKey: privateKey,
            routes: [
                {
                    path_pattern: "/v1/inference",
                    method: "POST",
                    price_usdc: 0.005
                }
            ]
        });

        console.log("✅ API Provisioned successfully!");
        console.log("Slug:", result.api_slug);
        console.log("Management Token:", result.management_token);
        console.log("Keep this token safe! You will need it for management.");

    } catch (error) {
        console.error("❌ Provisioning failed:", error.message);
    }
}

main();
