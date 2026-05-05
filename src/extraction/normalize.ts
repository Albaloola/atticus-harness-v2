const LIGATURES: Record<string, string> = {
  '\uFB00': 'ff',
  '\uFB01': 'fi',
  '\uFB02': 'fl',
  '\uFB03': 'ffi',
  '\uFB04': 'ffl',
  '\uFB05': 'st',
  '\uFB06': 'st',
};

const MOJIBAKE_LIGATURES: Record<string, string> = {
  'ï¬€': 'ff',
  'ï¬': 'fi',
  'ï¬‚': 'fl',
  'ï¬ƒ': 'ffi',
  'ï¬„': 'ffl',
  'â¬º': 'fi',
};

export function normalizeExtractedText(text: string): string {
  let normalized = text;
  for (const [bad, replacement] of Object.entries(MOJIBAKE_LIGATURES)) {
    normalized = normalized.split(bad).join(replacement);
  }

  normalized = normalized.normalize('NFKC');

  return normalized.replace(
    /[\uFB00-\uFB06]/g,
    (char) => LIGATURES[char] ?? char,
  );
}
