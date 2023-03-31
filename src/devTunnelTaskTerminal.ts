import { Tools } from "@microsoft/teamsfx-api";
import {
    TunnelManagementHttpClient,
    TunnelRequestOptions,
  } from "@microsoft/dev-tunnels-management";
  import { DevTunnelStateManager } from "./devTunnelStateManager";
  import * as msal from "@azure/msal-node";
let tools: Tools;
const TunnelManagementUserAgent = { name: "Teams Toolkit" };
const DevTunnelScopes = ["46da2f7e-b5ef-422a-88d4-2a7f9de6a0b2/.default"];
const DevTunnelTag = "TeamsToolkitCreatedTag";
async function main(){
const token= await getToken("b78ae59c-3ebf-4705-85d6-7283f2cd47f9", "helly3@hellytest.onmicrosoft.com", "abc")
console.log(token)
// const tunnelManagementClientImpl = new TunnelManagementHttpClient(
//     "Teams-Toolkit-UI-TEST",
//     () => Promise.resolve(`Bearer ${token}`)
//   );

const tunnelManagementClientImpl = new TunnelManagementHttpClient(
  "Teams-Toolkit1",
  () => Promise.resolve(`Bearer ${token}`)
);
  
async function getToken(
    tenantId: string,
    username: string,
    password: string
  ): Promise<string> {
    const config = {
      auth: {
        clientId: "7ea7c24c-b1f6-4a20-9d11-9ae12e9e7ac0",
        authority: `https://login.microsoftonline.com/${tenantId}`,
      },
    };

    const usernamePasswordRequest = {
      scopes: ["46da2f7e-b5ef-422a-88d4-2a7f9de6a0b2/.default"],
      username: username,
      password: encodeURIComponent(password),
    };

    const pca = new msal.PublicClientApplication(config);
    const credential = await pca.acquireTokenByUsernamePassword(
      usernamePasswordRequest
    );
    const accessToken = credential?.accessToken;
    if (!accessToken) {
      throw new Error("Failed to get token.");
    }
    return accessToken;
  }

  console.log(tunnelManagementClientImpl)
 const devTunnelStateManager = DevTunnelStateManager.create();

async function deleteExistingTunnel(): Promise<void> {
  const devTunnelStates = await tunnelManagementClientImpl.listTunnels();
  console.log(devTunnelStates);
  for (const devTunnelState of devTunnelStates) {
    try {

      const tunnelInstance = await tunnelManagementClientImpl.getTunnel({
        tunnelId: devTunnelState.tunnelId,
        clusterId: devTunnelState.clusterId,
      });

      if (!tunnelInstance) {
      // await devTunnelStateManager.deleteTunnelState(devTunnelState);
      }
      if (tunnelInstance?.tags?.includes(DevTunnelTag)) {
       // await tunnelManagementClientImpl.deleteTunnel(tunnelInstance);
       // await devTunnelStateManager.deleteTunnelState(devTunnelState);
      }
    } catch {
      // Do nothing if delete existing tunnel failed.
    }
  }
}

await deleteExistingTunnel()
}
main()