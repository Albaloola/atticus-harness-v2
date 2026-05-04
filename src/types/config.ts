export interface HarnessConfig {
  version: string;
  openRouterApiKey?: string;
  defaultModel: string;
  fallbackModel: string;
  maxRetries: number;
  timeoutMs: number;
  quietMode: boolean;
  verbose: boolean;
  matterDirectory: string;
}
