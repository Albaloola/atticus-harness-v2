import { readFile } from 'fs/promises';
import JSZip from 'jszip';
import { hashText } from './hash.js';
import type { ExtractedText } from './types.js';

const EXTRA_PARTS = [
  'word/header1.xml',
  'word/header2.xml',
  'word/header3.xml',
  'word/footer1.xml',
  'word/footer2.xml',
  'word/footer3.xml',
  'word/footnotes.xml',
  'word/endnotes.xml',
];

export async function extractDocxText(filePath: string, sourceId?: string): Promise<ExtractedText> {
  const data = await readFile(filePath);
  const zip = await JSZip.loadAsync(data);

  const textParts: string[] = [];

  const docXml = await zip.file('word/document.xml')?.async('string');
  if (docXml) {
    textParts.push(extractTextFromXml(docXml));
  }

  for (const partPath of EXTRA_PARTS) {
    const xml = await zip.file(partPath)?.async('string');
    if (xml) {
      const text = extractTextFromXml(xml);
      if (text.trim()) textParts.push(text.trim());
    }
  }

  const text = textParts.join('\n\n').trim();

  return {
    sourceId: sourceId || filePath,
    text,
    method: 'docx_parse',
    confidence: 0.85,
    sha256: hashText(text),
    extractedAt: new Date().toISOString(),
  };
}

function extractTextFromXml(xml: string): string {
  const texts: string[] = [];

  const cleanXml = xml
    .replace(/<w:tab[^>]*\/>/g, '\t')
    .replace(/<w:br[^>]*\/>/g, '\n');

  const tagRegex = /<w:t[^>]*>([^<]+)<\/w:t>/g;
  let match: RegExpExecArray | null;

  while ((match = tagRegex.exec(cleanXml)) !== null) {
    texts.push(match[1]);
  }

  return texts.join('');
}
