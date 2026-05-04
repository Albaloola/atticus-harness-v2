import { createHash } from 'crypto';
import { createReadStream } from 'fs';

export async function hashFile(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const hash = createHash('sha256');
    const stream = createReadStream(filePath, { highWaterMark: 64 * 1024 });
    stream.on('data', (chunk) => hash.update(chunk as string | Buffer));
    stream.on('end', () => resolve(hash.digest('hex')));
    stream.on('error', reject);
  });
}

export function hashText(text: string): string {
  return createHash('sha256').update(text, 'utf-8').digest('hex');
}
