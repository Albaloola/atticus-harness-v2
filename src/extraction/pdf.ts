import { execFile } from 'child_process';
import { promisify } from 'util';
import { mkdtemp, readFile, readdir, rm } from 'fs/promises';
import { tmpdir } from 'os';
import { basename, join } from 'path';
import { hashText } from './hash.js';
import { normalizeExtractedText } from './normalize.js';
import type { ExtractedText, PageExtraction, ExtractionMethod } from './types.js';

const exec = promisify(execFile);

export async function extractPdfText(filePath: string, sourceId?: string): Promise<ExtractedText> {
  const pageCount = await getPageCount(filePath);
  const text = await runPdftotext(filePath).catch(() => '');
  const pages = text.split('\f');

  const pageExtractions: PageExtraction[] = [];
  let needsOcr = false;
  const tmpDir = await mkdtemp(join(tmpdir(), 'harness-ocr-'));

  try {
    for (let i = 0; i < pageCount; i++) {
      const pageText = normalizeExtractedText(pages[i] || '');
      const lines = pageText.split('\n').filter(l => l.trim().length > 0);
      const density = lines.length > 0 ? lines.filter(l => l.trim().length > 3).length / Math.max(lines.length, 1) : 0;

      if (lines.length < 5 || density < 0.15) {
        needsOcr = true;
        const pageNum = i + 1;
        const { pngPath, imageHash } = await renderPageToPng(filePath, pageNum, tmpDir);
        const ocrText = normalizeExtractedText(await runTesseract(pngPath));
        pageExtractions.push({
          pageNumber: pageNum,
          text: ocrText,
          method: 'tesseract_ocr',
          confidence: 0.65,
          renderedImageHash: imageHash,
        });
      } else {
        pageExtractions.push({
          pageNumber: i + 1,
          text: pageText,
          method: 'pdftotext',
          confidence: 0.85,
        });
      }
    }
  } finally {
    await rm(tmpDir, { recursive: true, force: true }).catch(() => {});
  }

  const finalText = normalizeExtractedText(pageExtractions.map(p => p.text).join('\f'));
  const method: ExtractionMethod = needsOcr ? 'visual_ocr_pipeline' : 'pdftotext';

  return {
    sourceId: sourceId || filePath,
    text: finalText,
    method,
    confidence: needsOcr ? 0.75 : 0.85,
    pageCount,
    sha256: hashText(finalText),
    extractedAt: new Date().toISOString(),
    pages: pageExtractions,
  };
}

async function getPageCount(filePath: string): Promise<number> {
  const { stdout } = await exec('pdfinfo', [filePath]);
  const match = stdout.match(/Pages:\s+(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

async function runPdftotext(filePath: string): Promise<string> {
  const { stdout } = await exec('pdftotext', ['-layout', '-enc', 'UTF-8', filePath, '-']);
  return stdout;
}

async function renderPageToPng(filePath: string, pageNum: number, outputDir: string): Promise<{ pngPath: string; imageHash: string }> {
  const padded = String(pageNum).padStart(3, '0');
  const prefix = join(outputDir, `page-${padded}`);
  await exec('pdftoppm', ['-png', '-f', String(pageNum), '-l', String(pageNum), filePath, prefix]);
  const pngPath = await findRenderedPng(outputDir, basename(prefix), pageNum);
  const pngData = await readFile(pngPath);
  const imageHash = hashText(pngData.toString('base64'));
  return { pngPath, imageHash };
}

async function findRenderedPng(outputDir: string, prefixBase: string, pageNum: number): Promise<string> {
  const candidates = [
    `${prefixBase}-${String(pageNum).padStart(3, '0')}.png`,
    `${prefixBase}-${pageNum}.png`,
    `${prefixBase}.png`,
  ];
  const files = await readdir(outputDir);
  const match =
    candidates.find((candidate) => files.includes(candidate)) ??
    files.find((file) => file.startsWith(`${prefixBase}-`) && file.endsWith('.png'));

  if (!match) {
    throw new Error(`PDF render did not produce a PNG for page ${pageNum} in ${outputDir}`);
  }

  return join(outputDir, match);
}

async function runTesseract(imagePath: string): Promise<string> {
  const { stdout } = await exec('tesseract', [imagePath, 'stdout']);
  return stdout;
}
