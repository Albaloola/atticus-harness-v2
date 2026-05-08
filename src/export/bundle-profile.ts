export interface BundleProfile {
  profileId: string;
  bundleType: string;
  includeMarkdown: boolean;
  includeJson: boolean;
  includePdf: boolean;
}

export function resolveBundleProfile(profileId = 'court-ready-markdown-json'): BundleProfile {
  if (profileId === 'court-ready-markdown-json') {
    return {
      profileId,
      bundleType: 'court-ready',
      includeMarkdown: true,
      includeJson: true,
      includePdf: false,
    };
  }
  if (profileId === 'pdf-qc') {
    return {
      profileId,
      bundleType: 'court-ready-pdf',
      includeMarkdown: true,
      includeJson: true,
      includePdf: true,
    };
  }
  throw new Error(`Unknown export bundle profile "${profileId}"`);
}
