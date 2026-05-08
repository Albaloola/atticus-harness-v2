export interface OptionalOCRAdapter {
  name: 'ocrmypdf' | 'docling' | 'tesseract';
  command: string;
  available: boolean;
}

export function describeOptionalOCRAdapters(): OptionalOCRAdapter[] {
  return [
    { name: 'ocrmypdf', command: 'ocrmypdf', available: false },
    { name: 'docling', command: 'docling', available: false },
    { name: 'tesseract', command: 'tesseract', available: false },
  ];
}

