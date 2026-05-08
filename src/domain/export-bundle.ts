export type ExportBundleStatus = 'draft' | 'readiness_blocked' | 'signoff_required' | 'ready' | 'exported' | 'failed';

export interface ExportBundle {
  exportId: string;
  matterName: string;
  bundleType: string;
  status: ExportBundleStatus;
  outputPath?: string;
  manifestPath?: string;
  createdAt: string;
  metadata: Record<string, unknown>;
}

