import { describe, it, expect, vi, beforeEach } from 'vitest';

const execFileMock = vi.fn();
const readFileMock = vi.fn();
const readdirMock = vi.fn();
const rmMock = vi.fn();
const mkdtempMock = vi.fn();

vi.mock('child_process', () => ({
  execFile: execFileMock,
}));

vi.mock('fs/promises', () => ({
  mkdtemp: mkdtempMock,
  readFile: readFileMock,
  readdir: readdirMock,
  rm: rmMock,
}));

const { extractPdfText } = await import('../../src/extraction/pdf.ts');

describe('extractPdfText', () => {
  beforeEach(() => {
    execFileMock.mockReset();
    readFileMock.mockReset();
    readdirMock.mockReset();
    rmMock.mockReset();
    mkdtempMock.mockReset();
    mkdtempMock.mockResolvedValue('/tmp/harness-ocr-test');
    rmMock.mockResolvedValue(undefined);
  });

  it('finds rendered PNGs with non-padded pdftoppm suffixes and cleans up', async () => {
    const densePage = ['alpha', 'bravo', 'charlie', 'delta', 'echo'].join('\n');

    execFileMock.mockImplementation((cmd: string, args: string[], callback: (err: Error | null, result?: { stdout: string }) => void) => {
      if (cmd === 'pdfinfo') {
        callback(null, { stdout: 'Pages: 4\n' });
        return;
      }
      if (cmd === 'pdftotext') {
        callback(null, { stdout: `${densePage}\f${densePage}\f${densePage}\f` });
        return;
      }
      if (cmd === 'pdftoppm') {
        expect(args).toEqual(['-png', '-f', '4', '-l', '4', '/tmp/source.pdf', '/tmp/harness-ocr-test/page-004']);
        callback(null, { stdout: '' });
        return;
      }
      if (cmd === 'tesseract') {
        expect(args).toEqual(['/tmp/harness-ocr-test/page-004-4.png', 'stdout']);
        callback(null, { stdout: 'OCR con\uFB01rm text' });
        return;
      }
      callback(new Error(`unexpected command: ${cmd}`));
    });
    readdirMock.mockResolvedValue(['page-004-4.png']);
    readFileMock.mockResolvedValue(Buffer.from('png-bytes'));

    const result = await extractPdfText('/tmp/source.pdf', 'SRC-1');

    expect(result.pageCount).toBe(4);
    expect(result.method).toBe('visual_ocr_pipeline');
    expect(result.text).toContain('OCR confirm text');
    expect(result.pages?.[3]).toMatchObject({
      pageNumber: 4,
      method: 'tesseract_ocr',
      text: 'OCR confirm text',
    });
    expect(rmMock).toHaveBeenCalledWith('/tmp/harness-ocr-test', { recursive: true, force: true });
  });

  it('reports a clear render error and still cleans up when no PNG exists', async () => {
    execFileMock.mockImplementation((cmd: string, _args: string[], callback: (err: Error | null, result?: { stdout: string }) => void) => {
      if (cmd === 'pdfinfo') callback(null, { stdout: 'Pages: 1\n' });
      else if (cmd === 'pdftotext') callback(null, { stdout: '' });
      else if (cmd === 'pdftoppm') callback(null, { stdout: '' });
      else callback(new Error(`unexpected command: ${cmd}`));
    });
    readdirMock.mockResolvedValue([]);

    await expect(extractPdfText('/tmp/source.pdf')).rejects.toThrow('PDF render did not produce a PNG');
    expect(rmMock).toHaveBeenCalledWith('/tmp/harness-ocr-test', { recursive: true, force: true });
  });
});
