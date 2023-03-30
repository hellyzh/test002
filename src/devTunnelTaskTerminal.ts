import { Tools } from "@microsoft/teamsfx-api";
import {
    TunnelManagementHttpClient,
    TunnelRequestOptions,
  } from "@microsoft/dev-tunnels-management";
  import { DevTunnelStateManager } from "./devTunnelStateManager";
let tools: Tools;
const TunnelManagementUserAgent = { name: "Teams Toolkit" };
const DevTunnelScopes = ["46da2f7e-b5ef-422a-88d4-2a7f9de6a0b2/.default"];
const DevTunnelTag = "TeamsToolkitCreatedTag";
const tunnelManagementClientImpl = new TunnelManagementHttpClient(
    TunnelManagementUserAgent,
    async () => {
      const tokenRes = await tools.tokenProvider.m365TokenProvider.getAccessToken({
        scopes: DevTunnelScopes,
        showDialog: true,
      });

      if (tokenRes.isErr()) {
        return null;
      }
      const res = `Bearer ${tokenRes.value}`;
      return res;
    }
  );
  console.log(tunnelManagementClientImpl)
 const devTunnelStateManager = DevTunnelStateManager.create();

async function deleteExistingTunnel(): Promise<void> {
  const devTunnelStates = await devTunnelStateManager.listDevTunnelStates();
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

deleteExistingTunnel()