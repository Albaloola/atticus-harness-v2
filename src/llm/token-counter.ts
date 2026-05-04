const PUNCTUATION_RE = /[.,!?;:()[\]{}"'/-]/g;

export function estimateTokenCount(text: string): number {
  let tokens = 0;
  const words = text.trim().split(/\s+/).filter((w) => w.length > 0);

  for (const word of words) {
    if (word.length <= 4) {
      tokens += 1;
    } else if (word.length <= 8) {
      tokens += 2;
    } else {
      tokens += 3;
    }
    const punctuation = word.match(PUNCTUATION_RE);
    if (punctuation) tokens += punctuation.length;
  }

  tokens += Math.floor(words.length / 5);
  return Math.max(1, tokens);
}

export function estimateMessageTokens(
  messages: Array<{ role: string; content: string }>,
): number {
  const OVERHEAD_PER_MESSAGE = 4;
  let total = 0;
  for (const msg of messages) {
    total += OVERHEAD_PER_MESSAGE;
    total += estimateTokenCount(msg.content);
  }
  return total;
}

export function estimateToolTokens(
  tools: Array<{ name: string; description: string }>,
): number {
  if (!tools || tools.length === 0) return 0;

  const TOOL_SCHEMA_OVERHEAD = 10;
  const TOOL_FRAMING_OVERHEAD = 20;

  let total = 0;
  for (const tool of tools) {
    total += estimateTokenCount(tool.name + tool.description);
    total += TOOL_SCHEMA_OVERHEAD;
  }
  total += TOOL_FRAMING_OVERHEAD;
  return total;
}
